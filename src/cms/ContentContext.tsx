import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { defaultContent, SiteContent } from "./defaultContent";
import {
  subscribeToCloudContent,
  subscribeToCloudImages,
  saveContentToCloud,
  saveImageToCloud,
} from "./firebaseService";

// ---- deep-merge helper ----
function deepMerge<T extends Record<string, unknown>>(
  base: T,
  override: Partial<T>
): T {
  const result = { ...base };
  for (const key of Object.keys(override) as (keyof T)[]) {
    const b = base[key];
    const o = override[key];
    if (
      o !== null &&
      o !== undefined &&
      typeof o === "object" &&
      !Array.isArray(o) &&
      typeof b === "object" &&
      b !== null &&
      !Array.isArray(b)
    ) {
      result[key] = deepMerge(
        b as Record<string, unknown>,
        o as Record<string, unknown>
      ) as T[keyof T];
    } else if (o !== undefined) {
      result[key] = o as T[keyof T];
    }
  }
  return result;
}

const STORAGE_KEY = "cms_site_content_v2";
// Local cache for images (so they survive refreshes before Firebase loads)
const IMAGE_CACHE_KEY = "cms_image_cache_v1";

// ----------------------------------------------------------------
// Image cache helpers — images stored separately from text content
// so Firebase text updates don't wipe them out.
// ----------------------------------------------------------------
function loadImageCache(): Record<string, string> {
  try {
    const raw = localStorage.getItem(IMAGE_CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveImageCache(images: Record<string, string>): void {
  try {
    localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify(images));
  } catch { /* storage full — images will still load from Firestore */ }
}

/** Apply a flat { "page.fieldName": dataUrl } map onto a SiteContent object */
function applyImages(content: SiteContent, images: Record<string, string>): SiteContent {
  if (!Object.keys(images).length) return content;
  const result = structuredClone(content) as Record<string, unknown>;
  for (const [path, value] of Object.entries(images)) {
    if (!value) continue;
    const parts = path.split(".");
    let cursor = result;
    for (let i = 0; i < parts.length - 1; i++) {
      const next = cursor[parts[i]];
      if (next === null || typeof next !== "object") { cursor = {} as Record<string, unknown>; break; }
      cursor = next as Record<string, unknown>;
    }
    cursor[parts[parts.length - 1]] = value;
  }
  return result as SiteContent;
}

/** Returns true if a field path ends with "Image" */
function isImagePath(path: string): boolean {
  return path.endsWith("Image");
}

function sanitizeContent(c: SiteContent): { content: SiteContent; wasUpdated: boolean } {
  let wasUpdated = false;
  if (c.home?.heroTitle === "الـرئيسية...") {
    c.home.heroTitle = "نمــــكّن الابتكار";
    wasUpdated = true;
  }
  if (c.home?.heroSubtitle === "جمعية الابتكار والاستدامة المجتمعية") {
    c.home.heroSubtitle = "ونصنع أثـراً مستداماً";
    wasUpdated = true;
  }
  if (
    !c.about?.heroSubtitle ||
    c.about.heroSubtitle === "جمعية الابتكار والاستدامة المجتمعية جمعية وطنية سعودية غير ربحية، تأسست بهدف تعزيز ثقافة الابتكار، ودعم مسيرة الاستدامة المجتمعية في المملكة العربية السعودية." ||
    c.about.heroSubtitle.includes("غير ربحية")
  ) {
    c.about.heroSubtitle = defaultContent.about.heroSubtitle;
    wasUpdated = true;
  }
  return { content: c, wasUpdated };
}

function loadContent(): SiteContent {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const base = (() => {
      if (!raw) return defaultContent;
      const parsed = JSON.parse(raw) as Partial<SiteContent>;
      const merged = deepMerge(defaultContent as Record<string, unknown>, parsed as Record<string, unknown>) as SiteContent;
      const { content } = sanitizeContent(merged);
      return content;
    })();
    // Overlay locally-cached images (loaded instantly, Firebase images arrive shortly after)
    return applyImages(base, loadImageCache());
  } catch {
    return defaultContent;
  }
}

function saveContent(content: SiteContent): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  } catch {
    /* storage full */
  }
}

// ---- Context types ----
interface ContentContextValue {
  content: SiteContent;
  updateContent: (path: string, value: string) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextValue | null>(null);

// ---- Provider ----
export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(loadContent);

  // 1. Subscribe to text content from Firebase
  useEffect(() => {
    const unsubscribe = subscribeToCloudContent((cloudPartialContent) => {
      setContent((current) => {
        const merged = deepMerge(
          current as Record<string, unknown>,
          cloudPartialContent as Record<string, unknown>
        ) as SiteContent;
        const { content: sanitized, wasUpdated } = sanitizeContent(merged);
        if (wasUpdated) {
          setTimeout(() => saveContentToCloud(sanitized), 100);
        }
        saveContent(sanitized);
        // Reapply locally-cached images — Firebase text update must not erase them
        return applyImages(sanitized, loadImageCache());
      });
    });
    return () => unsubscribe();
  }, []);

  // 2. Subscribe to images from Firebase (site_images collection)
  useEffect(() => {
    const unsubscribe = subscribeToCloudImages((cloudImages) => {
      if (!Object.keys(cloudImages).length) return;
      // Update local cache with the latest cloud images
      const currentCache = loadImageCache();
      const merged = { ...currentCache, ...cloudImages };
      saveImageCache(merged);
      // Apply to current content
      setContent((current) => applyImages(current, cloudImages));
    });
    return () => unsubscribe();
  }, []);

  // 3. Persist text content to localStorage on state changes
  useEffect(() => {
    saveContent(content);
  }, [content]);

  const updateContent = useCallback((path: string, value: string) => {
    if (isImagePath(path)) {
      // === IMAGE UPDATE ===
      // 1. Show preview immediately (base64 in state)
      setContent((prev) => applyImages(prev, { [path]: value }));

      if (value) {
        // 2. Update local image cache right away
        const cache = loadImageCache();
        cache[path] = value;
        saveImageCache(cache);

        // 3. Save compressed image to Firestore (async, no Storage needed)
        saveImageToCloud(path, value).then((success) => {
          if (!success) console.warn("Image cloud sync failed for:", path);
        });
      } else {
        // Clearing image
        const cache = loadImageCache();
        delete cache[path];
        saveImageCache(cache);
        // TODO: optionally delete from Firestore too
      }
    } else {
      // === TEXT UPDATE ===
      setContent((prev) => {
        const parts = path.split(".");
        const next = structuredClone(prev) as Record<string, unknown>;
        let cursor = next;
        for (let i = 0; i < parts.length - 1; i++) {
          cursor = cursor[parts[i]] as Record<string, unknown>;
        }
        cursor[parts[parts.length - 1]] = value;
        const nextContent = next as SiteContent;
        saveContentToCloud(nextContent);
        return nextContent;
      });
    }
  }, []);

  const resetContent = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(IMAGE_CACHE_KEY);
    setContent(defaultContent);
    saveContentToCloud(defaultContent);
  }, []);

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
}

// ---- Hook ----
export function useContent(): ContentContextValue {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error("useContent must be used inside <ContentProvider>");
  }
  return ctx;
}

// ---- Convenience re-export ----
export type { SiteContent };
