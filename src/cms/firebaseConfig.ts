// ---- FIREBASE CONFIGURATION ----
export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const LOCAL_STORAGE_KEY = "firebase_user_config_v1";

export function getSavedFirebaseConfig(): FirebaseConfig {
  // 1. Vite bakes VITE_FIREBASE_* env vars into the JS bundle at build time.
  //    When deployed on Vercel with env vars set, ALL visitors get them automatically.
  const envApiKey = import.meta.env.VITE_FIREBASE_API_KEY as string | undefined;
  const envProjectId = import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined;

  if (envApiKey && envProjectId) {
    return {
      apiKey: envApiKey,
      authDomain: (import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string) || "",
      projectId: envProjectId,
      storageBucket: (import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string) || "",
      messagingSenderId: (import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string) || "",
      appId: (import.meta.env.VITE_FIREBASE_APP_ID as string) || "",
    };
  }

  // 2. Fallback: check localStorage (set via admin panel UI)
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.apiKey && parsed.projectId) {
        return parsed;
      }
    }
  } catch {
    /* ignore */
  }

  // 3. Not configured yet
  return {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  };
}

export function saveFirebaseConfig(config: FirebaseConfig): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(config));
  } catch {
    /* silent ignore */
  }
}

export function isFirebaseConfigured(config: FirebaseConfig = getSavedFirebaseConfig()): boolean {
  return Boolean(config.apiKey && config.projectId);
}
