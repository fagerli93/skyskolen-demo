import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYvsc1F5b6sbtheq48ue8q8XwaQnJONE8",
  authDomain: "skyskolen-demo.firebaseapp.com",
  projectId: "skyskolen-demo",
  storageBucket: "skyskolen-demo.appspot.com",
  messagingSenderId: "597494991412",
  appId: "1:597494991412:web:cb9267142692a270da5861",
  measurementId: "G-YWYHRD3Y3B",
};

const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initializeFirebase;
