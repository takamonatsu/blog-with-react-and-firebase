// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkfEVQD0xePhhPZizBA3zLDQW3VOZ7dM8",
  authDomain: "blog-with-react-and-fire-50b18.firebaseapp.com",
  projectId: "blog-with-react-and-fire-50b18",
  storageBucket: "blog-with-react-and-fire-50b18.appspot.com",
  messagingSenderId: "816034596641",
  appId: "1:816034596641:web:61826c460b8ecaf49be060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }