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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message)
        }
    }

    // console.log(snapShot.data());
    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ props: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;