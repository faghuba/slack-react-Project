import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyBuqdeGmfo8SyKzWsgzM6zPDX9rJeP_34o",
    authDomain: "slackclone-app-de89a.firebaseapp.com",
    projectId: "slackclone-app-de89a",
    storageBucket: "slackclone-app-de89a.appspot.com",
    messagingSenderId: "936623333966",
    appId: "1:936623333966:web:4cb3bd74a1644bf207191f",
    measurementId: "G-747N0S6TEV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase;