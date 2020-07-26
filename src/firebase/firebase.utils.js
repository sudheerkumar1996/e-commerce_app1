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
  export const createUserProfileDocument = async(userAuth , additionalData) => {
    if(!userAuth) return ;
    // console.log(firestore.doc('users/128fdashadu'))
    const userRef=firestore.doc(`users/${userAuth.uid}`);//we will get back user reference at that location
    const snapShot =await userRef.get();// get snapshot of firestore
    //console.log(snapShot);



    if(!snapShot.exists)
    {
      const{displayName , email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore= firebase.firestore();
const  provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase ;