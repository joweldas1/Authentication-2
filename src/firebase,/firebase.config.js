// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArPcoobIGycgOeI1xd05Qo_zRkjqwjzQc",
  authDomain: "authetication-2.firebaseapp.com",
  projectId: "authetication-2",
  storageBucket: "authetication-2.appspot.com",
  messagingSenderId: "862049135497",
  appId: "1:862049135497:web:c04a4673d10a0efb198f58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app