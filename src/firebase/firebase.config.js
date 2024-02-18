
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDTV203TVCZw5bbeSQ09xxeAr4u3akqYfM",
  authDomain: "coffeeandcode-80901.firebaseapp.com",
  projectId: "coffeeandcode-80901",
  storageBucket: "coffeeandcode-80901.appspot.com",
  messagingSenderId: "1004980678846",
  appId: "1:1004980678846:web:dd9cce1419803acb286eef",
  measurementId: "G-K3JKK0V6FR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)