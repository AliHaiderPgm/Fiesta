import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyDxWAVmcvD6OvOFsVWE5Ovik17OFpobYws",
    authDomain: "fiesta-bf0ff.firebaseapp.com",
    projectId: "fiesta-bf0ff",
    storageBucket: "fiesta-bf0ff.appspot.com",
    messagingSenderId: "160571200181",
    appId: "1:160571200181:web:a2f52567abfbd643b364fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const firestore = getFirestore(app)
const storage = getStorage(app);
export { auth, firestore, storage }