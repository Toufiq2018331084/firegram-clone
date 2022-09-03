// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUaC3BEChCAsgh5f_QzcUCxtIc-8AoKoo",
  authDomain: "firegram-4d5ae.firebaseapp.com",
  projectId: "firegram-4d5ae",
  storageBucket: "firegram-4d5ae.appspot.com",
  messagingSenderId: "979861471408",
  appId: "1:979861471408:web:3d8635de5fa42520ccbb75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.fireststore();

export {projectFirestore, projectStorage};