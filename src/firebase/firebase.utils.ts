import firebase, { User } from 'firebase/app';
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
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth: User | null, ...additionalData: any) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ displayName, email, createdAt, ...additionalData });
        } catch (error) {
            console.error('error creating user', error.message);
        }
    }
    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey: string, objectToAdd: any) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef, objectToAdd);
    const batch = firestore.batch();
    objectToAdd.forEach((collection: any) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, collection);
    });
    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections: any) =>
    collections.docs
        .map((doc: any) => {
            const { title, items } = doc.data();
            return {
                routeName: encodeURI(title.toLowerCase()),
                id: doc.id,
                title,
                items,
            };
        })
        .reduce((accum: any, collection: any) => {
            accum[collection.title.toLowerCase()] = collection;
            return accum;
        }, {});

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
