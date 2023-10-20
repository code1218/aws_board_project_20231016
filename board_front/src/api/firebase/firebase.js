// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBodcb849mhvpYoSU4ZAkjBY4McUll6Kso",
    authDomain: "board-dd5fb.firebaseapp.com",
    projectId: "board-dd5fb",
    storageBucket: "board-dd5fb.appspot.com",
    messagingSenderId: "47904827915",
    appId: "1:47904827915:web:a98a45ed86526072f9750e",
    measurementId: "G-CQLC7WKQ6H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);