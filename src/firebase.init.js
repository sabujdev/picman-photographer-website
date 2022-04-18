// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDC9DgoqM6xMo3VhmIybt8Nt57I9kyrRQ",
    authDomain: "picman-photographer.firebaseapp.com",
    projectId: "picman-photographer",
    storageBucket: "picman-photographer.appspot.com",
    messagingSenderId: "727022466057",
    appId: "1:727022466057:web:243c4478340f837ecb74d8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
