import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
//yourconfig
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore()
export default db
