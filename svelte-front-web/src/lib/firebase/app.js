import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { httpsCallable, getFunctions } from 'firebase/functions';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const isEmulator = import.meta.env.VITE_USE_EMULATOR == 1;

const firebaseConfig = {
  apiKey: "AIzaSyB0GUmksNYYgV4qbzDyg2DkIZWg6DZZjxc",
  authDomain: "active-module-397909.firebaseapp.com",
  projectId: "active-module-397909",
  storageBucket: "active-module-397909.appspot.com",
  messagingSenderId: "670731061839",
  appId: "1:670731061839:web:95ef672f7c006d590b383a",
  measurementId: "G-JHJ492NEGN",
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app, 'us-central1');
const storage = getStorage(app);

export { app, functions, httpsCallable };
