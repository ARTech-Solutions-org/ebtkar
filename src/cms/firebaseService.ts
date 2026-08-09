import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, setDoc, getDoc, collection, query } from "firebase/firestore";
import { getSavedFirebaseConfig, isFirebaseConfigured } from "./firebaseConfig";
import { SiteContent } from "./defaultContent";

const COLLECTION_NAME = "site_content";
const DOCUMENT_ID = "global_content";
const IMAGES_COLLECTION = "site_images"; // each doc = one image field path

let firestoreDb: ReturnType<typeof getFirestore> | null = null;

export function initFirebase() {
  const config = getSavedFirebaseConfig();
  if (isFirebaseConfigured(config)) {
    try {
      const app = getApps().length === 0 ? initializeApp(config) : getApp();
      firestoreDb = getFirestore(app);
      return firestoreDb;
    } catch (err) {
      console.warn("Firebase initialization warning:", err);
      return null;
    }
  }
  return null;
}

// Auto init on import if configured
initFirebase();

// ================================================================
// Image compression using browser Canvas API (100% free, no Storage)
// Compresses to max 900px wide at JPEG quality 0.75 → typically 40-100KB
// Well under Firestore's 1MB document limit.
// ================================================================

/**
 * Compress a base64 image using canvas.
 * Returns a compressed JPEG data-URL.
 */
export function compressImage(
  dataUrl: string,
  maxWidth = 900,
  quality = 0.75
): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxWidth / img.width);
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) { resolve(dataUrl); return; }
      ctx.drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

/**
 * Save a compressed image to a dedicated Firestore document.
 * Collection: site_images / document: encoded field path
 * e.g. path "home.heroImage" → doc id "home__heroImage"
 */
export async function saveImageToCloud(
  fieldPath: string,
  dataUrl: string
): Promise<boolean> {
  if (!firestoreDb) firestoreDb = initFirebase();
  if (!firestoreDb) return false;

  try {
    // Compress before saving
    const compressed = await compressImage(dataUrl);
    
    // Debug size
    const sizeInKb = Math.round(compressed.length / 1024);
    console.log(`📸 Saving image ${fieldPath}: ${sizeInKb} KB`);
    if (sizeInKb > 900) {
      console.warn("⚠️ Image is dangerously close to 1MB limit!");
    }

    // Encode the path as a safe Firestore doc ID (no dots allowed)
    const docId = fieldPath.replace(/\./g, "__");
    const docRef = doc(firestoreDb, IMAGES_COLLECTION, docId);
    await setDoc(docRef, { dataUrl: compressed, path: fieldPath, updatedAt: Date.now() });
    return true;
  } catch (err) {
    console.error("❌ Failed to save image to Firestore:", err);
    return false;
  }
}

/**
 * Load all images from Firestore once (for initial hydration).
 * Returns a flat record { fieldPath: dataUrl }.
 */
export async function loadAllImagesFromCloud(): Promise<Record<string, string>> {
  if (!firestoreDb) firestoreDb = initFirebase();
  if (!firestoreDb) return {};

  try {
    const { getDocs } = await import("firebase/firestore");
    const col = collection(firestoreDb, IMAGES_COLLECTION);
    const snapshot = await getDocs(col);
    const images: Record<string, string> = {};
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      if (data.path && data.dataUrl) {
        images[data.path] = data.dataUrl;
      }
    });
    return images;
  } catch (err) {
    console.warn("Could not load images from Firestore:", err);
    return {};
  }
}

/**
 * Subscribe to real-time image updates from Firestore.
 * Fires with the full images map whenever any image changes.
 */
export function subscribeToCloudImages(
  onUpdate: (images: Record<string, string>) => void
): () => void {
  if (!firestoreDb) firestoreDb = initFirebase();
  if (!firestoreDb) return () => {};

  try {
    const col = collection(firestoreDb, IMAGES_COLLECTION);
    const unsubscribe = onSnapshot(
      col,
      (snapshot) => {
        const images: Record<string, string> = {};
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          if (data.path && data.dataUrl) {
            images[data.path] = data.dataUrl;
          }
        });
        onUpdate(images);
      },
      (err) => console.warn("Image subscription warning:", err)
    );
    return unsubscribe;
  } catch {
    return () => {};
  }
}

export function subscribeToCloudContent(
  onUpdate: (content: Partial<SiteContent>) => void
): () => void {
  if (!firestoreDb) {
    firestoreDb = initFirebase();
  }
  if (!firestoreDb) return () => {};

  try {
    const docRef = doc(firestoreDb, COLLECTION_NAME, DOCUMENT_ID);
    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          onUpdate(snapshot.data() as Partial<SiteContent>);
        }
      },
      (error) => {
        console.warn("Firestore subscription warning:", error);
      }
    );
    return unsubscribe;
  } catch (error) {
    console.warn("Cloud Firestore listener error:", error);
    return () => {};
  }
}

export async function saveContentToCloud(content: SiteContent): Promise<boolean> {
  if (!firestoreDb) {
    firestoreDb = initFirebase();
  }
  if (!firestoreDb) return false;

  try {
    // Strip any base64 image data before saving to the main content doc.
    // Images are stored separately in site_images collection.
    const safeContent = JSON.parse(JSON.stringify(content, (_key, value) => {
      if (typeof value === "string" && value.startsWith("data:image")) {
        return ""; // Strip base64 — stored separately via saveImageToCloud
      }
      return value;
    })) as SiteContent;

    const docRef = doc(firestoreDb, COLLECTION_NAME, DOCUMENT_ID);
    await setDoc(docRef, safeContent, { merge: true });
    return true;
  } catch (error) {
    console.error("Failed to save content to Cloud Firestore:", error);
    return false;
  }
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject?: string;
  type?: string;
  org?: string;
  message?: string;
  createdAt: string;
}

const LOCAL_MESSAGES_KEY = "ebtkar_contact_messages_v1";

export async function saveContactSubmission(submission: ContactSubmission): Promise<boolean> {
  // Always save to local backup array first
  try {
    const existing = JSON.parse(localStorage.getItem(LOCAL_MESSAGES_KEY) || "[]");
    localStorage.setItem(LOCAL_MESSAGES_KEY, JSON.stringify([submission, ...existing]));
  } catch {
    /* ignore */
  }

  if (!firestoreDb) {
    firestoreDb = initFirebase();
  }
  if (!firestoreDb) return true;

  try {
    const docRef = doc(firestoreDb, "contact_submissions", `msg_${Date.now()}`);
    await setDoc(docRef, submission);
    return true;
  } catch (err) {
    console.warn("Could not save message to Cloud Firestore:", err);
    return true;
  }
}

export function subscribeToContactSubmissions(
  onUpdate: (messages: ContactSubmission[]) => void
): () => void {
  // Read local messages first
  try {
    const existing = JSON.parse(localStorage.getItem(LOCAL_MESSAGES_KEY) || "[]");
    onUpdate(existing);
  } catch {
    onUpdate([]);
  }

  if (!firestoreDb) {
    firestoreDb = initFirebase();
  }
  if (!firestoreDb) return () => {};

  try {
    const q = query(collection(firestoreDb, "contact_submissions"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const allMsgs: ContactSubmission[] = [];
        snapshot.docs.forEach((docSnap) => {
          const data = docSnap.data();
          if (docSnap.id === "all_messages" && Array.isArray(data.list)) {
            allMsgs.push(...data.list);
          } else if (data.name && data.email) {
            allMsgs.push(data as ContactSubmission);
          }
        });

        allMsgs.sort((a, b) => {
          const dateA = new Date(a.createdAt || 0).getTime();
          const dateB = new Date(b.createdAt || 0).getTime();
          return dateB - dateA;
        });
        onUpdate(allMsgs);
      },
      () => {}
    );
    return unsubscribe;
  } catch {
    return () => {};
  }
}
