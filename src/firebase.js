import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import store from "./redux/store";
import {
  login as loginHandle,
  logout as logoutHandle,
} from "./redux/authSlice";
import toast from "react-hot-toast";

import { appendBooks, clearBooks } from "./redux/booksSlice";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export default app;

//  Signup with email

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success("Successfully Sign Up!");
    return user;
  } catch (error) {
    if (error.code === "auth/weak-password") {
      toast.error("Password should be at least 6 characters");
    } else if (error.code === "auth/invalid-email") {
      toast.error("Email adress is invalid.");
    } else {
      toast.error("Something went wrong. Please contact us!");
    }
  }
};

// Login with email

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Successfully Log In!");
    return user;
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      toast.error("Wrong Password");
    } else if (error.code === "auth/invalid-email") {
      toast.error("Email adress is invalid.");
    } else if (error.code === "auth/user-not-found") {
      toast.error("User not Found");
    } else {
      toast.error("Something went wrong. Please contact us!");
    }
  }
};

// Sign out
export const logout = async () => {
  await signOut(auth);
  toast.success("Logout Successfully");
};

// auth redux control
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(loginHandle(user));
  } else {
    store.dispatch(logoutHandle());
  }
});

//! Firestore

//  Create Data

export const addBook = async (data, documentId) => {
  const collectionWithEmail = auth.currentUser.email;
  try {
    await setDoc(doc(db, collectionWithEmail, documentId), {
      data,
    });
    toast.success("Add book Successfully");
    return true;
  } catch (error) {
    toast.error(error);
    return false;
  }
};

// FETCH data

export const getData = async (userEmail) => {
  const querySnapShot = await getDocs(collection(db, userEmail));
  store.dispatch(clearBooks());
  querySnapShot.forEach((doc) => {
    store.dispatch(appendBooks(doc.data().data));
  });
};

// delete data

export const deleteData = async (id) => {
  const collectionWithEmail = auth.currentUser.email;
  try {
    await deleteDoc(doc(db, collectionWithEmail, id));
    toast.success("Deleted Book");
  } catch (error) {
    toast.error(error.message);
  }
};
