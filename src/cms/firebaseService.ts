import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, setDoc } from "firebase/firestore";
import { getSavedFirebaseConfig, isFirebaseConfigured } from "./firebaseConfig";
import { SiteContent } from "./defaultContent";

const COLLECTION_NAME = "site_content";
const DOCUMENT_ID = "global_content";

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
    const docRef = doc(firestoreDb, COLLECTION_NAME, DOCUMENT_ID);
    await setDoc(docRef, content, { merge: true });
    return true;
  } catch (error) {
    console.error("Failed to save content to Cloud Firestore:", error);
    return false;
  }
}
