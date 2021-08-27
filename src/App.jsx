/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Header from './Components/Header';
import Details from './Components/Details';
import Theme from './Components/Theme';
import { AuthProvider } from './Components/AuthProvider';

function App() {
	const [loginOverlay, setloginOverlay] = useState(false);
	const [singUpOverlay, setSingUpOverlay] = useState(false);

	return (
    
		<Theme>
			<AuthProvider> 
				<Header setloginOverlay={setloginOverlay}/>
				<Details loginOverlay={loginOverlay}  setloginOverlay={setloginOverlay}
					singUpOverlay={singUpOverlay}  setSingUpOverlay={setSingUpOverlay} />
			</AuthProvider>
		</Theme>
	);
}

export default App;
