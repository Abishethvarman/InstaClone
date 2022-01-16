import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs8uMuuwaFt4xN12A_GqKW9q_zkKqy-BI",
  authDomain: "rn-instagram-clone-fc656.firebaseapp.com",
  projectId: "rn-instagram-clone-fc656",
  storageBucket: "rn-instagram-clone-fc656.appspot.com",
  messagingSenderId: "616806601132",
  appId: "1:616806601132:web:bdac2216f02786e643aa09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export  {auth}