/* eslint-disable react/prop-types */
import React, { useEffect, useContext, useState } from 'react';
import {auth} from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut, updateProfile } from 'firebase/auth';


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

	const signUp = (email, password, name )=>{
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				updateProfile(userCredential, {
					displayName: name,
				}).then(() => {

					console.log('Profile updated!');

					// ...
				}).catch((error) => {
					// An error occurred
					const errorMessage = error.message;
					console.log(errorMessage);
					setSignUpError(errorMessage);
					// ...
				});
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


