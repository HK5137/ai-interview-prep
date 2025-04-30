import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoigm4Lv1A24m5XMyn7-l_cjbHpNu2te0",
  authDomain: "prepwise-40bf8.firebaseapp.com",
  projectId: "prepwise-40bf8",
  storageBucket: "prepwise-40bf8.firebasestorage.app",
  messagingSenderId: "858286668311",
  appId: "1:858286668311:web:3d6cf0868d80387bd77a52",
  measurementId: "G-MG2F72ZN31"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);