/* eslint-disable react/prop-types */
import React, { useEffect, useContext, useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; 


const AuthContext = React.createContext();

export const useAuth = ()=>{
	return useContext(AuthContext);
};

export function AuthProvider({children}) {

	const [currentUser, setcurrentUser] = useState();
	const [loading, setloading] = useState(true);

	const createUserDoc = async (id,name)=>{
		try {
			await setDoc(doc(db, 'users', id), {
				userName: name,
			});
		} catch (e) {
			console.error('Error adding document: ', e);
		}
          
	};
      
	const signUp = (email, password, name )=>{
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				createUserDoc(user.uid,name);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};


	const login = (email, password )=>{
		signInWithEmailAndPassword(auth, email, password);
	};



	const logout = ()=>{
		signOut(auth);
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
		login,
		logout
	};
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}


