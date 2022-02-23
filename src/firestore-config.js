import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyClclQTG0B-hh4e5W1OjJFEYb8P86ljQOY",
  authDomain: "crud-blog-5feaa.firebaseapp.com",
  projectId: "crud-blog-5feaa",
  storageBucket: "crud-blog-5feaa.appspot.com",
  messagingSenderId: "114084645004",
  appId: "1:114084645004:web:52e19778047c8936d813a9",
  measurementId: "G-SLGM5VFFJM"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()