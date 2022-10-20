// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBm9PYSd61TzPVsBXXEqwRBLQVxGt7f8Lk",
  authDomain: "todo-app-b4b20.firebaseapp.com",
  projectId: "todo-app-b4b20",
  storageBucket: "todo-app-b4b20.appspot.com",
  messagingSenderId: "873350087662",
  appId: "1:873350087662:web:009b15b6c3bef17cf844ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)