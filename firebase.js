import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnhuCn6qsiHYsQQwDAg5IP9H9OXYTT6Ts",
  authDomain: "binshop-8006f.firebaseapp.com",
  projectId: "binshop-8006f",
  storageBucket: "binshop-8006f.firebasestorage.app",
  messagingSenderId: "1093646474699",
  appId: "1:1093646474699:web:4e07a9e3fc28a543562a4e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
