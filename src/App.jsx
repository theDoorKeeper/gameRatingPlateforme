import { useState } from 'react';
import Header from './Components/Header';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignupPage';
import Theme from './Components/Theme';

function App() {
  const [loginOverlay, setloginOverlay] = useState(false);
  const [singUpOverlay, setSingUpOverlay] = useState(false);
  
  return (
    <Theme>
      <Header setloginOverlay={setloginOverlay}/>
      <LoginPage overlayState={loginOverlay} setOverlayState={setloginOverlay} setSingUpOverlay={setSingUpOverlay}/>
      <SignUpPage overlayState={singUpOverlay} setOverlayState={setSingUpOverlay} setloginOverlay={setloginOverlay}/>
      
    </Theme>
  );
}

export default App;
