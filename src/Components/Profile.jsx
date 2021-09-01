import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './AuthProvider';

function Profile() {
	const {logout,currentUser} = useAuth();
	const history = useHistory();

	const handleLogout  = async()=>{
		await logout();
		history.push('/');

	};
	return (
		<div>
            this is his is {currentUser.email} profile
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}

export default Profile;
