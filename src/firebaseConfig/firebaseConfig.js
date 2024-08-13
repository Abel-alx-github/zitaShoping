import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCm_LFdbpIqXB7riHJ6V95TZDxk_LEV7E4",
    authDomain: "react-zitashop.firebaseapp.com",
    projectId: "react-zitashop",
    storageBucket: "react-zitashop.appspot.com",
    messagingSenderId: "587668674933",
    appId: "1:587668674933:web:07e01c3a92caa8d5ac1b3c"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)


export default app;
