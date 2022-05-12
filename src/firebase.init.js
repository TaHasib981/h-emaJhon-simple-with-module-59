// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEyAaTNTuHHSIG1A_X3am0SIk0DeJEBsA",
  authDomain: "h-ema-john-with-route.firebaseapp.com",
  projectId: "h-ema-john-with-route",
  storageBucket: "h-ema-john-with-route.appspot.com",
  messagingSenderId: "830472045130",
  appId: "1:830472045130:web:d4aa58bb69bd25353d1cb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth