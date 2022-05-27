/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA96uZJA4_keQpOEmsK5t8yh1XYRoDd0Cg",
  authDomain: "mepredict-8ba0c.firebaseapp.com",
  projectId: "mepredict-8ba0c",
  storageBucket: "mepredict-8ba0c.appspot.com",
  messagingSenderId: "756571049560",
  appId: "1:756571049560:web:21225761b6399214a2442d",
  measurementId: "G-7F86STDN9S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unSub;
  }, []);
  return currentUser;
}
