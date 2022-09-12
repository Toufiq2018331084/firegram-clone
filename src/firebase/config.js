import { initializeApp } from "firebase/app";
//import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getFirestore,serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7gHK1eNpu4_fMrlkU06iY0HHrWRekiek",
  authDomain: "firegram-eb9af.firebaseapp.com",
  projectId: "firegram-eb9af",
  storageBucket: "firegram-eb9af.appspot.com",
  messagingSenderId: "928685675224",
  appId: "1:928685675224:web:19210acee3e97f7fc27dad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
//const timestamp = app.firestore.FieldValue.serverTimestamp(app);
export { projectStorage, projectFirestore};
//export { projectStorage, projectFirestore, timestamp };