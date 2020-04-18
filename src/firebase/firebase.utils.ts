import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAP3wTRpQTD-2fMDN6mY8vvsm_xJ--477w',
    authDomain: 'crwn-db-cb531.firebaseapp.com',
    databaseURL: 'https://crwn-db-cb531.firebaseio.com',
    projectId: 'crwn-db-cb531',
    storageBucket: 'crwn-db-cb531.appspot.com',
    messagingSenderId: '285707271970',
    appId: '1:285707271970:web:be4462687a6a4c99436f7b',
    measurementId: 'G-LRVPZNJVKX',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
