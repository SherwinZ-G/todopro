// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firebase-firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBpWJDs1qiYbQg9W7KOeNDygi62_tmuJg4",
  authDomain: "todo-pro-ju.firebaseapp.com",
  projectId: "todo-pro-ju",
  storageBucket: "todo-pro-ju.appspot.com",
  messagingSenderId: "814036488039",
  appId: "1:814036488039:web:af4acbf5dbf59f3e4e29c2",
  measurementId: "G-79JPPV411L"
});

export{firebaseConfig as firebase};