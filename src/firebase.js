import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB22vVpUAouBaaa9xBBDfYuTxTQwzqrb5w",
    authDomain: "direction-1940d.firebaseapp.com",
    projectId: "direction-1940d",
    storageBucket: "direction-1940d.appspot.com",
    messagingSenderId: "801548757727",
    appId: "1:801548757727:web:a250c9f5a40015c147176a",
    measurementId: "G-MB3VNXJDWX"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;