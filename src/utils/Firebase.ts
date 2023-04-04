import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBkabnaLq5En2Be6meNSDJIHTFfC-q_0Xw",
  authDomain: "adoye-naturals.firebaseapp.com",
  projectId: "adoye-naturals",
  storageBucket: "adoye-naturals.appspot.com",
  messagingSenderId: "589726381438",
  appId: "1:589726381438:web:60982e2ad758956636ef2f",
  measurementId: "G-12JTCN2BL2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const db = getFirestore(app);
const db = firebase.firestore();
const storage = firebase.storage();
export default getFirestore(app);
export { db, storage};

