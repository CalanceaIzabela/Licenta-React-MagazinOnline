import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA79YfTdIZyb6vArGvjngElR7pczpe_YGI",
  authDomain: "magazin-online-c7dc4.firebaseapp.com",
  databaseURL: "https://magazin-online-c7dc4.firebaseio.com",
  projectId: "magazin-online-c7dc4",
  storageBucket: "magazin-online-c7dc4.appspot.com",
  messagingSenderId: "510886604419",
  appId: "1:510886604419:web:f0a53cae8f62d18219f5b6",
  measurementId: "G-E0GDL17EKD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promot: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;