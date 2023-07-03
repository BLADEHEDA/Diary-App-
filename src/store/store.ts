import { configureStore } from '@reduxjs/toolkit';
// link your App to firebase 
import { initializeApp } from 'firebase/app';
import firebase from "../firebase/firebase"
// Import your reducers
import counterReducer from "./counterSlice";
// Initialize Firebase app
const firebaseApp = initializeApp(firebase);

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add more reducers as needed
  },
});

export default store;
