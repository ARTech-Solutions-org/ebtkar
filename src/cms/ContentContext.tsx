import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { defaultContent, SiteContent } from "./defaultContent";
import { subscribeToCloudContent, saveContentToCloud } from "./firebaseService";

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
    if (!raw) return defaultContent;
    const parsed = JSON.parse(raw) as Partial<SiteContent>;
    const merged = deepMerge(defaultContent as Record<string, unknown>, parsed as Record<string, unknown>) as SiteContent;
    const { content } = sanitizeContent(merged);
    return content;
  } catch {
    return defaultContent;
  }
}

function saveContent(content: SiteContent): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  } catch {
    /* storage full — silently ignore */
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

  // 1. Subscribe to Real-time Firebase Cloud Updates
  useEffect(() => {
    const unsubscribe = subscribeToCloudContent((cloudPartialContent) => {
      setContent((current) => {
        const merged = deepMerge(
          current as Record<string, unknown>,
          cloudPartialContent as Record<string, unknown>
        ) as SiteContent;
        const { content: sanitized, wasUpdated } = sanitizeContent(merged);
        if (wasUpdated) {
          setTimeout(() => {
            saveContentToCloud(sanitized);
          }, 100);
        }
        saveContent(sanitized);
        return sanitized;
      });
    });
    return () => unsubscribe();
  }, []);

  // 2. Persist to localStorage on local state changes
  useEffect(() => {
    saveContent(content);
  }, [content]);

  const updateContent = useCallback((path: string, value: string) => {
    setContent((prev) => {
      const parts = path.split(".");
      const next = structuredClone(prev) as Record<string, unknown>;
      let cursor = next;
      for (let i = 0; i < parts.length - 1; i++) {
        cursor = cursor[parts[i]] as Record<string, unknown>;
      }
      cursor[parts[parts.length - 1]] = value;

      const nextContent = next as SiteContent;
      // Sync to Firebase Cloud Firestore asynchronously
      saveContentToCloud(nextContent);

      return nextContent;
    });
  }, []);

  const resetContent = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
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
