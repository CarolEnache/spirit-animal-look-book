import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAYw0nvl7EPJdtYK9H5gMHDKe_qm4UL-W8",
  authDomain: "spirit-animal-look-book-136a0.firebaseapp.com",
  databaseURL: "https://spirit-animal-look-book-136a0.firebaseio.com",
  projectId: "spirit-animal-look-book-136a0",
  storageBucket: "spirit-animal-look-book-136a0.appspot.com",
  messagingSenderId: "889458114785"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
