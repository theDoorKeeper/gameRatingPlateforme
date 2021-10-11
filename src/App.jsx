/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import Header from './Components/Header';
import Details from './Components/Details';
import Theme from './Components/Theme';
import { AuthProvider, useAuth } from './Components/AuthProvider';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Profile from './Components/Profile';
import PrivateRoute from './Components/PrivateRoute';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignupPage';
import Game from './Components/Game';
import User from './Components/User';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from './firebase';

function App() {
	const [loginOverlay, setloginOverlay] = useState(false);
	const [singUpOverlay, setSingUpOverlay] = useState(false);
	const [userData, setuserData] = useState({});
	const [loading, setLoading] = useState(false);
	const {currentUser} = useAuth();

	useEffect(() => {
		if(currentUser){
			const docRef = query(collection(db, 'users'), where('uid', '==', currentUser.uid));

			const unsub = onSnapshot(docRef, (querySnapshot) => {
				setLoading(true); 
				let data = {};
				querySnapshot.forEach((doc) => {
					data = doc.data();
					console.log('edited');
				});
				setuserData(data);
				setLoading(false);
			});

			return unsub;}

	},[currentUser]);

	
	useEffect(() => {
		if(currentUser){
			const getData = async () => {
				setLoading(true);
				const docRef = query(collection(db, 'users'), where('uid', '==', currentUser.uid));

				const docSnap = await getDocs(docRef);
				docSnap.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
					setuserData(doc.data());
				});
 
				setLoading(false);
			};

			getData();
		}

	}, [currentUser]);
	return (
		<Router>

			<Theme>
				<AuthProvider> 
					<Header setloginOverlay={setloginOverlay}/>			
					<Switch>
						<Route exact path="/">
							<Details/>
							{!currentUser ? <> <LoginPage overlayState={loginOverlay} setOverlayState={setloginOverlay} setSingUpOverlay={setSingUpOverlay}/>
								<SignUpPage overlayState={singUpOverlay} setOverlayState={setSingUpOverlay} setloginOverlay={setloginOverlay}/> </> : null}
						</Route>
						<PrivateRoute  path="/Profile" >
							<Profile userData={userData} loading={loading}/>
						</PrivateRoute>
						<Route path="/Game/:name">
							<Game/>
						</Route>
						<Route path="/Users/:name">
							<User/>
						</Route>

					</Switch>
				</AuthProvider>
			</Theme>

		</Router>
	);
}

export default App;
