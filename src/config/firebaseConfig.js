// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATxGzpNkkiQxLLAys2om1Rl58fYO-M9M8",
  authDomain: "fir-chat-da918.firebaseapp.com",
  databaseURL: "https://fir-chat-da918-default-rtdb.firebaseio.com",
  projectId: "fir-chat-da918",
  storageBucket: "fir-chat-da918.appspot.com",
  messagingSenderId: "204510091691",
  appId: "1:204510091691:web:0f92e2d310fe4d8f5f5aee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database=getDatabase(app);
const storage=getStorage(app);


export {database, storage};

