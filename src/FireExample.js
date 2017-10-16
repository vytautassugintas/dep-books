import firebase from 'firebase'
/*
 Copy the actual config from firebase
 and rename this file to Fire.js
 */
const config = {
  apiKey: "AIzaSyA8B5gpdlztvENOz9pZrTzc6yemk3b78c0",
  authDomain: "dep-books.firebaseapp.com",
  databaseURL: "https://dep-books.firebaseio.com",
  storageBucket: "your-domain-name.appspot.com",
  messagingSenderId: "123123123123"
};

const fire = firebase.initializeApp(config);

export default fire;