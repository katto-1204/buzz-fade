import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrtvixzUVZmQOYAL3jGfCtA74cyTniqmU",
  authDomain: "buzz-fade.firebaseapp.com",
  projectId: "buzz-fade",
  storageBucket: "buzz-fade.firebasestorage.app",
  messagingSenderId: "238548811143",
  appId: "1:238548811143:web:bb012665addac41db42722",
  measurementId: "G-PYZPGR22N6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);