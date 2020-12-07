import * as firebase from 'firebase';
import '@firebase/firestore';
import '@firebase/storage';

var firebaseConfig = {
	apiKey: 'AIzaSyCZQo9KBHizuluhatFj3LoraJEv6BgZg-I',
	authDomain: 'partyplanner-8871f.firebaseapp.com',
	projectId: 'partyplanner-8871f',
	storageBucket: 'partyplanner-8871f.appspot.com',
	messagingSenderId: '368255489505',
	appId: '1:368255489505:web:136873af4d4f51576faea0',
	measurementId: 'G-B1JQFXSJTZ'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}
