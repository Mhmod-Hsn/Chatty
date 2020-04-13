import firebase from 'firebase/app'
import firestore from '@firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDQvAg2ezSz-lfUUPLanYnOku_8XIoR7xA",
  authDomain: "chatty-d275b.firebaseapp.com",
  databaseURL: "https://chatty-d275b.firebaseio.com",
  projectId: "chatty-d275b",
  storageBucket: "chatty-d275b.appspot.com",
  messagingSenderId: "738578143819",
  appId: "1:738578143819:web:725ae8ccd455f8f8d10bce"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()