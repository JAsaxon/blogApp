// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCz4O0V_bLiqprkpmFjaYxbobN8FRJ36rk',
	authDomain: 'social-bc567.firebaseapp.com',
	projectId: 'social-bc567',
	storageBucket: 'social-bc567.appspot.com',
	messagingSenderId: '595240749561',
	appId: '1:595240749561:web:7b1bc8fe8f2666ffb0d528',
	measurementId: 'G-Q7VSTX9RH9'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
