import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyCY2M2GC5V62u_8X5rAHQ2G4tkgKeSNRn8",
    authDomain: "crwn-db-85e79.firebaseapp.com",
    databaseURL: "https://crwn-db-85e79.firebaseio.com",
    projectId: "crwn-db-85e79",
    storageBucket: "crwn-db-85e79.appspot.com",
    messagingSenderId: "375976622363",
    appId: "1:375976622363:web:7cbbb7b1a8f9c279133bbe",
    measurementId: "G-KYFFSPWG7H"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore= firebase.firestore();
const  provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase ;