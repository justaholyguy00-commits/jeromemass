// Firebase Configuration
// To use Firebase, create a project at https://console.firebase.google.com/
// Then replace the config below with your project's configuration

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp } from 'firebase/firestore';

// Your Firebase configuration
// Replace these values with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCEZ_mFqLh8-3Dek_N1jclHm-bj0bGEhj4",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "gloria-1a85e.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "gloria-1a85e",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "gloria-1a85e.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "620044457330",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:620044457330:web:939197a9595d5b11e579eb"
};

// Initialize Firebase
let app;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.warn('Firebase initialization failed. Using local data only.', error);
}

// Reflections collection reference
const REFLECTIONS_COLLECTION = 'reflections';

/**
 * Add a new reflection to Firestore
 */
export async function addReflection(reflection) {
  if (!db) {
    throw new Error('Firebase is not configured. Please set up Firebase to add reflections.');
  }

  try {
    const docRef = await addDoc(collection(db, REFLECTIONS_COLLECTION), {
      ...reflection,
      createdAt: serverTimestamp(),
      date: reflection.date || new Date().toISOString().split('T')[0]
    });
    return { id: docRef.id, ...reflection };
  } catch (error) {
    console.error('Error adding reflection:', error);
    throw error;
  }
}

/**
 * Get all reflections from Firestore
 */
export async function getReflections() {
  if (!db) {
    return null; // Return null to indicate Firebase is not available
  }

  try {
    const q = query(collection(db, REFLECTIONS_COLLECTION), orderBy('date', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting reflections:', error);
    return null;
  }
}

/**
 * Check if Firebase is properly configured
 */
export function isFirebaseConfigured() {
  return db !== undefined &&
         firebaseConfig.apiKey !== "YOUR_API_KEY" &&
         !firebaseConfig.apiKey?.includes('YOUR_');
}

export { db };
