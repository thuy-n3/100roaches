import firebase from 'firebase/app';
import 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCa4eZpiK-28q2kOqU1SCP4xv9H4QWolYg",
    authDomain: "roach100-2b795.firebaseapp.com",
    databaseURL: "https://roach100-2b795-default-rtdb.firebaseio.com",
    projectId: "roach100-2b795",
    storageBucket: "roach100-2b795.appspot.com",
    messagingSenderId: "447162014806",
    appId: "1:447162014806:web:5ae6192b1e2a1276f8aff7",
    measurementId: "G-EY1YHTC1MQ"
  };

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;