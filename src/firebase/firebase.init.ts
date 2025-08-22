import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDqjsR0-bVB34PKmVfCWKqcOFT2px2GOU",
  authDomain: "simple-firebase-2754f.firebaseapp.com",
  projectId: "simple-firebase-2754f",
  storageBucket: "simple-firebase-2754f.appspot.com",
  messagingSenderId: "691702336606",
  appId: "1:691702336606:web:6018a9aa4373ad7321f8cf",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);

export default app;
