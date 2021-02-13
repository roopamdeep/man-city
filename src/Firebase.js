import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBD2wocdTWFqdocexlmGPO6mnN9OLOFrKI",
  authDomain: "smash-it-62527.firebaseapp.com",
  databaseURL: "https://smash-it-62527-default-rtdb.firebaseio.com",
  projectId: "smash-it-62527",
  storageBucket: "smash-it-62527.appspot.com",
  messagingSenderId: "185598342069",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
export { firebase, firebaseMatches };
