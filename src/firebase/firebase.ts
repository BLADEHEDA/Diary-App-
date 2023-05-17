import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBY_A3LwY8pVyRHu_20JIqRqvEmtQRc0xo",
    authDomain: "diary-app-ca8af.firebaseapp.com",
    projectId: "diary-app-ca8af",
    storageBucket: "diary-app-ca8af.appspot.com",
    messagingSenderId: "296167296869",
    appId: "1:296167296869:web:3898721b457d2891c89b8c",
    measurementId: "G-KF9LB8G9F6"
  };

  firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// export const firestore = firebase.firestore();
// export const auth = firebase.auth();