/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Header from './Components/Header';
import LoginPage from './Components/LoginPage';
import Details from './Components/Details';
import SignUpPage from './Components/SignupPage';
import Theme from './Components/Theme';
import { AuthProvider } from './Components/AuthProvider';

function App() {
	const [loginOverlay, setloginOverlay] = useState(false);
	const [singUpOverlay, setSingUpOverlay] = useState(false);
  
	return (
    
		<Theme>
			<AuthProvider> 
				<Header setloginOverlay={setloginOverlay}/>
				<LoginPage overlayState={loginOverlay} setOverlayState={setloginOverlay} setSingUpOverlay={setSingUpOverlay}/>
				<SignUpPage overlayState={singUpOverlay} setOverlayState={setSingUpOverlay} setloginOverlay={setloginOverlay}/>
				<Details/>
			</AuthProvider>
		</Theme>
	);
}

export default App;
