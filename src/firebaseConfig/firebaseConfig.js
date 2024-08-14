import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "I don't show in public here",
    authDomain: "I don't show in public here",
    projectId: "I don't show in public here",
    storageBucket: "I don't show in public here",
    messagingSenderId: "I don't show in public here",
    appId: "I don't show in public here"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)


export default app;
