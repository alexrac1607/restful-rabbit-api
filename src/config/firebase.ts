// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyCantn5evIIuoXJzX6zsZ_1miUf3p0hg",
  authDomain: "apiphany-f572a.firebaseapp.com",
  projectId: "apiphany-f572a",
  storageBucket: "apiphany-f572a.appspot.com",
  messagingSenderId: "953573372175",
  appId: "1:953573372175:web:c199541f4204951e238e7a",
  measurementId: "G-N5V6K6WYTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);