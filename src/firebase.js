// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBZ9zVxEwnI7K42buA5PeZH4T9Zy0B3zUY",
  authDomain: "whatsapp-mern-c21ed.firebaseapp.com",
  projectId: "whatsapp-mern-c21ed",
  storageBucket: "whatsapp-mern-c21ed.appspot.com",
  messagingSenderId: "915983119242",
  appId: "1:915983119242:web:c60dc6065155775b42ce73",
  measurementId: "G-8ZRLHWQ642",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
