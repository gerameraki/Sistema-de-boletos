import firebase from 'firebase/app'  

//Add additional services that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA_r9TIkE_gtcVati1nXXomKvmpC6ls3F8",
    authDomain: "pweb-853b1.firebaseapp.com",
    databaseURL: "https://pweb-853b1.firebaseio.com",
    projectId: "pweb-853b1",
    storageBucket: "pweb-853b1.appspot.com",
    messagingSenderId: "292099591270",
    appId: "1:292099591270:web:790492791eff1b5fad31a7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Ya no es necesario porque FirebaseTeam lo coloca en TRUE por Defecto
  firebase.firestore().settings({
      timestampsInSnapshots: true
  })

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()
  const functions = firebase.functions()

  export {
      firebase,
      auth,
      db,
      storage,
      functions
  }
