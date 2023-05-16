/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
 import {getAuth} from 'firebase/auth'
// import { getFirestore } from "firebase/firestore";
// import { getStorage, ref } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAbtpRpW0TTBkTo_GW9zeU-uqrXxxeJDU0",
//   authDomain: "nalawa-2.firebaseapp.com",
//   projectId: "nalawa-2",
//   storageBucket: "nalawa-2.appspot.com",
//   messagingSenderId: "946367679044",
//   appId: "1:946367679044:web:b326db9279da8dbc130a11"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth()
// export const db = getFirestore(app);
// export const storage = getStorage();

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbtpRpW0TTBkTo_GW9zeU-uqrXxxeJDU0",
  authDomain: "nalawa-2.firebaseapp.com",
  projectId: "nalawa-2",
  storageBucket: "nalawa-2.appspot.com",
  messagingSenderId: "946367679044",
  appId: "1:946367679044:web:b326db9279da8dbc130a11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
