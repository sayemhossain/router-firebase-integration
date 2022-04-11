import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE7i6UDJ8LUzyE9ToyHk6BLrcWLPVjNm0",
  authDomain: "router-firebase-integrat-bc830.firebaseapp.com",
  projectId: "router-firebase-integrat-bc830",
  storageBucket: "router-firebase-integrat-bc830.appspot.com",
  messagingSenderId: "388846056150",
  appId: "1:388846056150:web:5cf748ce82d5adaacb8f77",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
