
import firebase from 'firebase/app';
import 'firebase/auth';

export const auth =  firebase.initializeApp({
    apiKey: "AIzaSyD4XSiSoeYGShKfrlT0hC-o8ruvO_tdgdw",
    authDomain: "chatapp-5c949.firebaseapp.com",
    projectId: "chatapp-5c949",
    storageBucket: "chatapp-5c949.appspot.com",
    messagingSenderId: "98324310060",
    appId: "1:98324310060:web:57e26107e4f10853378989"
  }).auth();