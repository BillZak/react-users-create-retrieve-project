import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDUeKEnsDpggTdf2B6c9SZ8F-YJR0qi8zE",
    authDomain: "user-forms-ac819.firebaseapp.com",
    projectId: "user-forms-ac819",
    storageBucket: "user-forms-ac819.appspot.com",
    messagingSenderId: "955690356321",
    appId: "1:955690356321:web:e3e34145ae7819b9a6a420"
  };
  

firebase.initializeApp(firebaseConfig);

export default firebase;