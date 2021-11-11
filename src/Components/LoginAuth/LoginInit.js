import { initializeApp } from "firebase/app";
import firebaseConfig from "./LoginConfig";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
};

export default initializeAuthentication;