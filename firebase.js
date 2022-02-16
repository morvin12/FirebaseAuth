// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFj3sIQEnUIHmHC4K7aOQLekLlPPeamuc",
  authDomain: "fir-auth-a2d87.firebaseapp.com",
  projectId: "fir-auth-a2d87",
  storageBucket: "fir-auth-a2d87.appspot.com",
  messagingSenderId: "491495805850",
  appId: "1:491495805850:web:9f8e050bb1bccb2eb52023"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
