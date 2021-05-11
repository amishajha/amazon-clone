// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBo3-IOypxGWWr8apeY2Mv9qbXQ32DJbXQ",
    authDomain: "clone-58fdd.firebaseapp.com",
    projectId: "clone-58fdd",
    storageBucket: "clone-58fdd.appspot.com",
    messagingSenderId: "50642783786",
    appId: "1:50642783786:web:f1547ffcae47612bb0bd53",
    measurementId: "G-57HTFCLG42"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();


  export{db,auth};