import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBn5lzkrP54jFxpqm_RiYn7W4n6aGi-D70",
  authDomain: "ram-todoapp.firebaseapp.com",
  projectId: "ram-todoapp",
  storageBucket: "ram-todoapp.appspot.com",
  messagingSenderId: "938281384815",
  appId: "1:938281384815:web:1e618f1f69404b815f869a",
  measurementId: "G-FKNS1ZV4XG"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };