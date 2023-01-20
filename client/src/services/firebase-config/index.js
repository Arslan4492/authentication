// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCA5uOhLDhGwrfLZr9kMKZuBqS2IR6jA4A",
    authDomain: "gamechanger-6efa0.firebaseapp.com",
    projectId: "gamechanger-6efa0",
    storageBucket: "gamechanger-6efa0.appspot.com",
    messagingSenderId: "200355570348",
    appId: "1:200355570348:web:2f8d8718fb5f864820f509"
};

// Initialize Firebase
if (!getApps.length) {
    initializeApp(firebaseConfig);
}

const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }