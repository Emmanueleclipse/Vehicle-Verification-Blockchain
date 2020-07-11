import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDQXGbQKIAXgTGzGcknu8Xj9yRqTogZaHs",
    authDomain: "demoproject-53326.firebaseapp.com",
    databaseURL: "https://demoproject-53326.firebaseio.com",
    projectId: "demoproject-53326",
    storageBucket: "demoproject-53326.appspot.com",
    messagingSenderId: "133645204315"
  };
  firebase.initializeApp(config);

  export const db = firebase.database();
  export const auth = firebase.auth();