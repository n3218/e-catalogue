import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD468ZCaAq7dSpl9r5MkRkJ67MF6DYMLe8",
    authDomain: "e-catalog-45272.firebaseapp.com",
    databaseURL: "https://e-catalog-45272.firebaseio.com",
    projectId: "e-catalog-45272",
    storageBucket: "e-catalog-45272.appspot.com",
    messagingSenderId: "1030887827136",
    appId: "1:1030887827136:web:630a655019075e3aa3ef25",
    measurementId: "G-GNEFYSRJEC"
  };


  firebase.initializeApp(config);
//   firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ props: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;