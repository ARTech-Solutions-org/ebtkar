import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, setDoc, collection, query } from "firebase/firestore";
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
            // Legacy array format (old batch document)
            allMsgs.push(...data.list);
          } else if (data.name && data.email) {
            // Individual document format — message field is optional (quick contact form doesn't have it)
            allMsgs.push(data as ContactSubmission);
          }
        });

        // Sort by createdAt descending (most recent first)
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
