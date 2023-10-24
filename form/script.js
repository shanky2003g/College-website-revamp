import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6g6w0d5T62NDm3tumQQEchofMH0DIP5c",
  authDomain: "login-form-8f2e4.firebaseapp.com",
  projectId: "login-form-8f2e4",
  storageBucket: "login-form-8f2e4.appspot.com",
  messagingSenderId: "1028019173954",
  appId: "1:1028019173954:web:0aa81771f637c59cbd0bdb",
  measurementId: "G-3T52KPM5F6"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
