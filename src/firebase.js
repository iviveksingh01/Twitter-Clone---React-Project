import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgcQaF6ZczwfpwylFv3FSvPf2wjobJ2L4",
  authDomain: "twitter--clone-98a65.firebaseapp.com",
  projectId: "twitter--clone-98a65",
  storageBucket: "twitter--clone-98a65.appspot.com",
  messagingSenderId: "663853357778",
  appId: "1:663853357778:web:c1d3fba11e6e259eedeb0b",
  measurementId: "G-QHPY0XN8TC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);