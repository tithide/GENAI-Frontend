import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDh4wLnv0WA76gR1fwNgckNX_Po2Igpy0A",
    authDomain: "cartiofy.firebaseapp.com",
    projectId: "cartiofy",
    storageBucket: "cartiofy.appspot.com",
    messagingSenderId: "236837420377",
    appId: "1:236837420377:web:69315d35a752a2739ee048",
    measurementId: "G-9XW4TXS4WL"
};
  

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };