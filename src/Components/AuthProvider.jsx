/* eslint-disable react/prop-types */
import React, { useEffect, useContext, useState } from 'react';
import {auth, db} from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut} from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';


const AuthContext = React.createContext();

export const useAuth = ()=>{
	return useContext(AuthContext);
};

export function AuthProvider({children}) {
	
	const [currentUser, setcurrentUser] = useState();
	const [loading, setloading] = useState(true);
	const [signUpError, setSignUpError] = useState('');
	const [loginError, setLoginError] = useState('');
	const [logoutError, setlogoutError] = useState('');	


	const createUserDoc = async (id,name, email)=>{
		try {
			await setDoc(doc(db, 'users', name), {
				userName : name,
				uid : id,
				eMail : email,
				bio : null,
				ratings : [],
				followers : [],
				following : [],
				wishList : [],
				creationDate : serverTimestamp()
			});
		} catch (error) {
			const errorMessage = error.message;
			console.log(errorMessage);
			setSignUpError(errorMessage);
		}

	};

	const signUp = (email, password, name )=>{
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				createUserDoc(userCredential.user.uid,name,userCredential.user.email);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
				setSignUpError(errorMessage);
			});
	};


	const login = (email, password )=>{
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
			// Signed in 
			// ...
			})
			.catch((error) => {
				const errorMessage = error.message; 
				console.log(errorMessage);
				setLoginError(errorMessage);
			});
	};		


	const logout = ()=>{
		signOut(auth)
			.then(() => {
				console.log('logged out');
			// Signed in 
			// ...
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
				setlogoutError(errorMessage);
			});
	};

      
	useEffect(() => {
		setloading(true);
		const unsubScribe =  onAuthStateChanged(auth,(user=>{
			setcurrentUser(user);
		}));

		setloading(false);
		return () => unsubScribe;
	}, []);
     
	const value = {
		currentUser,
		signUp,
		signUpError,
		login,
		loginError,
		logout,
		logoutError
	};
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}


