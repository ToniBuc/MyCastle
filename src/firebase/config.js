import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

// Firebase initialization
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// const projectStorage = getFirestore(app);

// Firebase authentication
const login = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  }
  catch (error){
    console.error(error);
    alert("The entered email and/or password is not valid. Please try again.");
  }
}

const register = async (name, email, password) => {
  try {
    const reg = await auth.createUserWithEmailAndPassword(email, password);
    const user = reg.user;
    await projectFirestore.collection('users').add({
      userId: user.uid,
      name,
      authProvider: 'local',
      email
    });
  }
  catch (error){
    console.error(error);
    alert(error.message);
  }
}

const resetPassword = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  }
  catch (error){
    console.error(error);
    alert(error.message);
  }
}
const logout = () => {
  auth.signOut();
}

export { app, auth, projectStorage, projectFirestore, timestamp, login, register, resetPassword, logout };