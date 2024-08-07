// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// 1. import the firestore service
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCAj1YR8jroIoIzG-pL535Wp-PdrFsgmE",
  authDomain: "rentanthing-28dd4.firebaseapp.com",
  projectId: "rentanthing-28dd4",
  storageBucket: "rentanthing-28dd4.appspot.com",
  messagingSenderId: "482782187348",
  appId: "1:482782187348:web:063c7aff1a78ce43f742c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 2. initialize Firestore service
const db = getFirestore(app)


// 3. export the Firestore service from this js file so other parts of your app can use it
export { db }