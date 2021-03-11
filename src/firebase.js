import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpG9w9jyAK6rkUjgks7kvb-2yReZ_PmP0",
  authDomain: "think-piece-95018.firebaseapp.com",
  projectId: "think-piece-95018",
  storageBucket: "think-piece-95018.appspot.com",
  messagingSenderId: "2534179364",
  appId: "1:2534179364:web:c7f21f1331d42e32ca8eb1"
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

firestore.settings({ timestampInSnapshots: true });

window.firebase = firebase;

export default firebase;
