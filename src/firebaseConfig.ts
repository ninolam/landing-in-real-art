import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import 'firebase/storage'
import { getStorage } from 'firebase/storage'

/*
// Firbase accout Gilles
const projectId = "inrealart"
const bucketUrl = 'gs://inrealart.appspot.com'
*/

const projectId = "inrealartlanding-3a094"
const bucketUrl = 'gs://inrealartlanding-3a094.appspot.com'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: projectId,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  }

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app, projectId)
export { db, storage  }

