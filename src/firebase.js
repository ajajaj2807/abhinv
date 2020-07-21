import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwZl74KyvfTAZm6VfTqpoaD9vrq8gyab8",
  authDomain: "abhinv-c1dd5.firebaseapp.com",
  databaseURL: "https://abhinv-c1dd5.firebaseio.com",
  projectId: "abhinv-c1dd5",
  storageBucket: "abhinv-c1dd5.appspot.com",
  messagingSenderId: "760441474702",
  appId: "1:760441474702:web:d332cf09000e911e7383df",
};

//firebase.initializeApp(firebaseConfig);
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const firestore = firebase.firestore();
