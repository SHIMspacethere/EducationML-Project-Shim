import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { httpsCallable, getFunctions } from "firebase/functions";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { userStore } from "$lib/store.js";

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
const functions = getFunctions(app, "us-central1");
const storage = getStorage(app);
const modelRef = ref(storage, "tsjs_model.h5/model.json");

let user = null;
const auth = getAuth();
const provider = new GoogleAuthProvider();
onAuthStateChanged(auth, (currentUser) => {
  user = currentUser;
  userStore.set(user);
});

async function handleGoogleLogin() {
  if (user) {
    alert("이미 구글 로그인을 하였습니다.");
    window.location.reload();
  }
  else {
    try {
    const result = await signInWithPopup(auth, provider);
    user = result.user;
    window.location.reload();
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
  }
}

async function handleGoogleLogout() {
  try {
      await signOut(auth);
      user = null;
      alert("성공적으로 로그아웃되었습니다.");
      window.location.reload();
  } catch (error) {
      console.error("Google Sign-Out Error:", error);
  }
}

export {
  app,
  functions,
  storage,
  modelRef,
  httpsCallable,
  handleGoogleLogin,
  handleGoogleLogout,
};
