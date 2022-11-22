import { getApps, initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {
    collection,
    getDocs,
    getFirestore,
    limit,
    query,
    where,
    Timestamp,
    FieldValue,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_APPID,
};


if (!getApps().length) {
    initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore();
export const storage = getStorage();

export const serverTimestamp = FieldValue.serverTimestamp;
export const fromMillis = Timestamp.fromMillis;
export const increment = FieldValue.increment;


/**
 *  Converts a firebase docuement to JSON
 *
 */

export function postToJson(doc) {
    const data = doc.data();

    const jsonData =  {
        ...data,
        createdAt: data.createdAt.toMillis() || 0,
        updatedAt: data.updatedAt ? data.updatedAt.toMillis() : data.createdAt.toMillis(),
    };
    return jsonData;
}


