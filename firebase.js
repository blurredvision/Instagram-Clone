// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP8FWPpkbIGeCiUnCkxB1pWDYGXieNxQM",
  authDomain: "insta-clone-d2ca1.firebaseapp.com",
  projectId: "insta-clone-d2ca1",
  storageBucket: "insta-clone-d2ca1.appspot.com",
  messagingSenderId: "996893023407",
  appId: "1:996893023407:web:5e36cdc83758c91443485a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };