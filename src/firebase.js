// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBf2js3GihjqlKji51MRFMvU2d3VeV_34k',
	authDomain: 'rategame-1c2e4.firebaseapp.com',
	projectId: 'rategame-1c2e4',
	storageBucket: 'rategame-1c2e4.appspot.com',
	messagingSenderId: '375803104446',
	appId: '1:375803104446:web:80a7a17f74874df6f762ef'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

export const storage = getStorage(app);
