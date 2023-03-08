// Import the functions you need from the SDKs you need
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBvGLKZltfBVy68QFlLK46ysGZUFsA8bm0",
    authDomain: "academia-sissca.firebaseapp.com",
    projectId: "academia-sissca",
    storageBucket: "academia-sissca.appspot.com",
    messagingSenderId: "913482853592",
    appId: "1:913482853592:web:8686a08584de471d2efbad"
  };
  
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);