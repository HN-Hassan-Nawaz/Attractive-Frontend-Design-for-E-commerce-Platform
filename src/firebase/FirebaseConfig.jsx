
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwAy7pwr8rNB2-UAUPNhRIW22a1u-EpMY",
    authDomain: "myfirstapp-1a880.firebaseapp.com",
    projectId: "myfirstapp-1a880",
    storageBucket: "myfirstapp-1a880.appspot.com",
    messagingSenderId: "855758602267",
    appId: "1:855758602267:web:91bf4e9bcd48fbc678f8be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
