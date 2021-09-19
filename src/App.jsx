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

function App() {
	const [loginOverlay, setloginOverlay] = useState(false);
	const [singUpOverlay, setSingUpOverlay] = useState(false);
	
	const {currentUser} = useAuth();

	useEffect(() => {
		console.log(currentUser);
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
						<PrivateRoute  path="/Profile" component={Profile}/>
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
