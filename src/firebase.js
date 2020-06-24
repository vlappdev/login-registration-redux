import * as firebase from 'firebase/app'
import 'firebase/auth'

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMtZa_T7v3ZXspkVB7bbdXzjE2ymZsZj4",
    authDomain: "fir-react-auth-8ee30.firebaseapp.com",
    databaseURL: "https://fir-react-auth-8ee30.firebaseio.com",
    projectId: "fir-react-auth-8ee30",
    storageBucket: "fir-react-auth-8ee30.appspot.com",
    messagingSenderId: "785008082425",
    appId: "1:785008082425:web:38282fc89b919dc080d128"
};
// Initialize Firebase
const firebaseAuth = firebase.initializeApp(firebaseConfig);

export default firebaseAuth
