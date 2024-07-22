import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZeDLj_doF7k8i_exf70UzjrBJk9nY_nE",
    authDomain: "wedding-project-6aadd.firebaseapp.com",
    projectId: "wedding-project-6aadd",
    storageBucket: "wedding-project-6aadd.appspot.com",
    messagingSenderId: "867897208873",
    appId: "1:867897208873:web:baa2ec2ea5d9022311ec38",
    measurementId: "G-3SB59EMRGF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
