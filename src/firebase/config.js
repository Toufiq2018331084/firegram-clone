import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7gHK1eNpu4_fMrlkU06iY0HHrWRekiek",
  authDomain: "firegram-eb9af.firebaseapp.com",
  projectId: "firegram-eb9af",
  storageBucket: "firegram-eb9af.appspot.com",
  messagingSenderId: "928685675224",
  appId: "1:928685675224:web:19210acee3e97f7fc27dad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };