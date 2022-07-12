import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDP8HYNfNF1_ZNp7HGIlLVRDzDVBnQSsr8",
  authDomain: "todolist-ecba9.firebaseapp.com",
  projectId: "todolist-ecba9",
  storageBucket: "todolist-ecba9.appspot.com",
  messagingSenderId: "1025461531352",
  appId: "1:1025461531352:web:a171331893732c92ba9dad",
  measurementId: "G-CKBWZH4B2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;