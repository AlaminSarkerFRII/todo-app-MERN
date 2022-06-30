// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWucJbWaXegudmpU3Lw3FHZ3IaWI8mnQ8",
  authDomain: "todo-app-4a0d6.firebaseapp.com",
  projectId: "todo-app-4a0d6",
  storageBucket: "todo-app-4a0d6.appspot.com",
  messagingSenderId: "766692990097",
  appId: "1:766692990097:web:348a340c765f4bfd647330"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;