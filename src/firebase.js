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

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // get a ref to the place in the database where a user profile is stored
  const userRef = firestore.doc(`users/${user.uid}`);

  // fetch the document from that location
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("Error reating user", error.message);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

export default firebase;
