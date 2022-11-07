import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCBt5w8qT0RHYFNq-JGhxLSpOPgACP5OWU",
    authDomain: "moriscultiva.firebaseapp.com",
    projectId: "moriscultiva",
    storageBucket: "moriscultiva.appspot.com",
    messagingSenderId: "83599732782",
    appId: "1:83599732782:web:50d9d4b78036049cc5efbf"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)