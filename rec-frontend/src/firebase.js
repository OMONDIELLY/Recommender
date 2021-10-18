
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";



const firebaseConfig = {
    apiKey: "AIzaSyAn2hvKb4MIUuUMwZRkz5b58E8fNgL0vGU",
    authDomain: "recommender-21b47.firebaseapp.com",
    projectId: "recommender-21b47",
    storageBucket: "recommender-21b47.appspot.com",
    messagingSenderId: "896502413008",
    appId: "1:896502413008:web:add936b7c6a8a890c1d0d5"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


  export {auth, provider,storage};
  export default db;


