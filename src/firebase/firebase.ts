import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// sub




const firebaseConfig = {
  apiKey: "AIzaSyBY_A3LwY8pVyRHu_20JIqRqvEmtQRc0xo",
  authDomain: "diary-app-ca8af.firebaseapp.com",
  databaseURL: "https://diary-app-ca8af-default-rtdb.firebaseio.com",
  projectId: "diary-app-ca8af",
  storageBucket: "diary-app-ca8af.appspot.com",
  messagingSenderId: "296167296869",
  appId: "1:296167296869:web:3898721b457d2891c89b8c",
  measurementId: "G-KF9LB8G9F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);