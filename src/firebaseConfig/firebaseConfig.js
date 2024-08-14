import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "apiKey",
    authDomain: "react-zitashop.firebaseapp.com",
    projectId: "projectId",
    storageBucket: "storage",
    messagingSenderId: "messaging",
    appId: "appId"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)


export default app;
