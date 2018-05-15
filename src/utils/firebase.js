import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBbn9KeCZQQDwr7oR8Rsbw5Ou-hIi2Qo7M",
    authDomain: "blog-ed0c3.firebaseapp.com",
    databaseURL: "https://blog-ed0c3.firebaseio.com",
    projectId: "blog-ed0c3",
    storageBucket: "blog-ed0c3.appspot.com",
    messagingSenderId: "111250641955"
};
firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

export { firebase, db };