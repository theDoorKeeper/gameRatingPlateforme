import { useState } from 'react';
import Header from './Components/Header';
import LoginPage from './Components/LoginPage';
import Theme from './Components/Theme';

function App() {
  const [loginOverlay, setloginOverlay] = useState(false);

  return (
    <Theme>
      <Header/>
      <LoginPage overlayState={loginOverlay} setOverlayState={setloginOverlay}/>
    </Theme>
  );
}

export default App;
