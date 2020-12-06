import * as firebase from 'firebase';
import '@firebase/firestore';
import '@firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyDeSIEJzAYTU8EP_Q4nqX0KAaMDThQxrpY",
  authDomain: "partyplaner-614f2.firebaseapp.com",
  projectId: "partyplaner-614f2",
  storageBucket: "partyplaner-614f2.appspot.com",
  messagingSenderId: "457687109329",
  appId: "1:457687109329:web:ac11db290f9cf5a9e83ff0",
  measurementId: "G-9DDTZD7MDQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();