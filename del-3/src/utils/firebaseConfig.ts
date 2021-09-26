import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "XXX",
    authDomain: "XXX",
    projectId: "XXX",
    storageBucket: "XXX",
    messagingSenderId: "XXX",
    appId: "XXX",
    measurementId: "XXX",
};

const firebaseApp = initializeApp(firebaseConfig);

const useFirebase = () => {
    return firebaseApp;
};

export default useFirebase;
