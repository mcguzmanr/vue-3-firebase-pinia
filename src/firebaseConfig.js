// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvq0QlUt1dYuVbQ_IgXVwPxngDjSBpY_o",
  authDomain: "vue-firebase-2023.firebaseapp.com",
  projectId: "vue-firebase-2023",
  storageBucket: "vue-firebase-2023.appspot.com",
  messagingSenderId: "168180381134",
  appId: "1:168180381134:web:56ac202d61f40885faa79f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };