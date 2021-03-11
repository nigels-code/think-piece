import firebase from "firebase/app";
import "firebase/firestore";

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

firestore.settings({ timestampInSnapshots: true });

window.firebase = firebase;

export default firebase;
