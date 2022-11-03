import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkqOBQSrxxuevhKGpTy2hYNKG0IVlhtug",
  authDomain: "tinder-clone-53520.firebaseapp.com",
  projectId: "tinder-clone-53520",
  storageBucket: "tinder-clone-53520.appspot.com",
  messagingSenderId: "733944610281",
  appId: "1:733944610281:web:734ce5545d273dc8381f78",
  measurementId: "G-WFRDJ91NM3",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
