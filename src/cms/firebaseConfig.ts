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
  // 1. Check Vercel / Vite Environment Variables first
  const envConfig: FirebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
  };

  if (envConfig.apiKey && envConfig.projectId) {
    return envConfig;
  }

  // 2. Check localStorage saved configuration
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.apiKey && parsed.projectId) {
        return parsed;
      }
    }
  } catch {
    /* fallback */
  }

  // 3. Hardcoded project fallback (safe for client-side Firebase)
  return {
    apiKey: "AIzaSyBLP-YPhs2nLl_JCOY6G4w6duy4GMcJuw8",
    authDomain: "artech-connect.firebaseapp.com",
    projectId: "artech-connect",
    storageBucket: "artech-connect.firebasestorage.app",
    messagingSenderId: "927017986209",
    appId: "1:927017986209:web:589de3323719a3a859e8e0",
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
  return Boolean(
    config.apiKey &&
    config.apiKey !== "YOUR_API_KEY" &&
    config.projectId &&
    config.projectId !== "YOUR_PROJECT_ID"
  );
}
