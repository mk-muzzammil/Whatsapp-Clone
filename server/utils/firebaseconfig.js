import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1yccxTCaI7ny5k3psxg6348agK09nZZY",
  authDomain: "whatsapp-clone-310f3.firebaseapp.com",
  projectId: "whatsapp-clone-310f3",
  storageBucket: "whatsapp-clone-310f3.appspot.com",
  messagingSenderId: "990892441728",
  appId: "1:990892441728:web:12f88478887765b3192665",
  measurementId: "G-559880L8C6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
