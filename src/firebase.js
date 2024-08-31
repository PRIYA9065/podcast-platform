// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpHZfb-qdHaNZW95Q8EXrfL46x6uys8YI",
  authDomain: "podcast-app-react-b3bbb.firebaseapp.com",
  projectId: "podcast-app-react-b3bbb",
  storageBucket: "podcast-app-react-b3bbb.appspot.com",
  messagingSenderId: "443891499628",
  appId: "1:443891499628:web:4374913a777586d7a64e49",
  measurementId: "G-WF2QRDMZWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export{ auth, db, storage};