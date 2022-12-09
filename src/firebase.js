// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSKkxDuilaSo4EM7z1Ro_sUaeqsP7-oOA",
  authDomain: "chatsection-aae12.firebaseapp.com",
  projectId: "chatsection-aae12",
  storageBucket: "chatsection-aae12.appspot.com",
  messagingSenderId: "713746891331",
  appId: "1:713746891331:web:0cf15945bf674a34730af6",
  measurementId: "G-NE8QS2BZMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
