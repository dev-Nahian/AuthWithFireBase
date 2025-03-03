/* eslint-disable no-useless-catch */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD132izxgJCGEHwd3mghY2Yl8F__WHuDTo",
  authDomain: "nahianbook.firebaseapp.com",
  projectId: "nahianbook",
  storageBucket: "nahianbook.firebasestorage.app",
  messagingSenderId: "34576004699",
  appId: "1:34576004699:web:2e51e59d551281cd97b17e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider()

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user
  } catch (error) {
    throw(error)
  }
};


const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    return response
  } catch (error) {
    throw(error)
  }
}


const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (error) {
    throw(error)
  }
}


const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider)
    const user = res.user
    return user
  } catch (error) {
    throw(error)
  }
}

export { registerWithEmailAndPassword, loginWithEmailAndPassword, auth, sendPasswordReset, signInWithGoogle };
