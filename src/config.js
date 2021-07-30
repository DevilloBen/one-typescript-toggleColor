import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAqhPhKZ042uwrC0kbPY2ISwTDMxR2TjeE",
    authDomain: "react-auth-type.firebaseapp.com",
    projectId: "react-auth-type",
    storageBucket: "react-auth-type.appspot.com",
    messagingSenderId: "427152941869",
    appId: "1:427152941869:web:446effcbd00268ad56e9a4",
    measurementId: "G-0WSEKYP860"
})

export default firebaseConfig