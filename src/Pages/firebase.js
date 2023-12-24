// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJiIZKRvOhw2r1F3Xo1R0BRMn5DSfyaVM",
  authDomain: "learnovation-cff6b.firebaseapp.com",
  projectId: "learnovation-cff6b",
  storageBucket: "learnovation-cff6b.appspot.com",
  messagingSenderId: "898788655760",
  appId: "1:898788655760:web:9890c1dd4ea51bc17b0e15",
  measurementId: "G-SZJ33XSDS8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
