/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Header from './Components/Header';
import Details from './Components/Details';
import Theme from './Components/Theme';
import { AuthProvider } from './Components/AuthProvider';
import { Route, Router, Switch } from 'react-router';

function App() {
	const [loginOverlay, setloginOverlay] = useState(false);
	const [singUpOverlay, setSingUpOverlay] = useState(false);

	return (
    
		<Theme>
			<AuthProvider> 
				<Header setloginOverlay={setloginOverlay}/>
				<Router>
					<Switch>
						<Route exact path="/">
							<Details loginOverlay={loginOverlay}  setloginOverlay={setloginOverlay}
								singUpOverlay={singUpOverlay}  setSingUpOverlay={setSingUpOverlay} />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</Theme>
	);
}

export default App;
