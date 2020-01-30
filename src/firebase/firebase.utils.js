import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC8CwBdf7EvnZsgNy9kdLGuyr3XPoTRmGI",
    authDomain: "react-commerce-5af20.firebaseapp.com",
    databaseURL: "https://react-commerce-5af20.firebaseio.com",
    projectId: "react-commerce-5af20",
    storageBucket: "react-commerce-5af20.appspot.com",
    messagingSenderId: "641138394486",
    appId: "1:641138394486:web:6e3af58bc33f7c1cea6657",
    measurementId: "G-36JW71BYSW"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error)
    }
  }
  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase