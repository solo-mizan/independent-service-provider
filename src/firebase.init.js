// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcDf2h2d3Ev5NI2NOqFM0BSYok7-GRzlo",
    authDomain: "agricultural-consult-service.firebaseapp.com",
    projectId: "agricultural-consult-service",
    storageBucket: "agricultural-consult-service.appspot.com",
    messagingSenderId: "1012176640247",
    appId: "1:1012176640247:web:38babec7efe31e34865bf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;