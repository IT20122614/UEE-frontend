// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfIHVPoELB32McTemfE69A80pRWGWExBQ",
    authDomain: "recycle-app-6f320.firebaseapp.com",
    databaseURL: "https://recycle-app-6f320-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "recycle-app-6f320",
    storageBucket: "recycle-app-6f320.appspot.com",
    messagingSenderId: "883542192853",
    appId: "1:883542192853:web:640d97004ad7acc17ee85c",
    measurementId: "G-B8LE71XV30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);