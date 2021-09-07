import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDhRfZdeWTqcoNnEoOb3Pa7-EoxVqxhEow",
  authDomain: "clonetwitter-92073.firebaseapp.com",
  projectId: "clonetwitter-92073",
  storageBucket: "clonetwitter-92073.appspot.com",
  messagingSenderId: "59385606673",
  appId: "1:59385606673:web:2c9426f4b5a3589d6c77b0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore()
export default db