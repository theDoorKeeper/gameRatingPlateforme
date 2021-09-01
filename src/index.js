import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './Components/AuthProvider';
import './global.css';

ReactDOM.render(
	<AuthProvider>
		<App />
	</AuthProvider>,
	document.getElementById('root')
);


