/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ref } from 'firebase/storage';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { storage } from '../../firebase';

const fadeInMove = keyframes`
  0% {
    opacity: 0;
    left: -300px;
  }
  100% {
    opacity: 1;
    left: 0;
  }
`; 

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`; 

const mvTop = keyframes`
  0% {top: -150px;}
  100% {top: 40px;}
`;

const dsTopAnim = keyframes`
0% {top: -150px;}
100% {top: 0;}
`;

const Card = styled.div`
  position: absolute;
  width: 250px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 10px 25px 5px rgba(0, 0, 0, 0.2);
  background: #151515;
  overflow: hidden;
`;

const DsTop = styled.img`
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    left: 0;
    width: 300px;
    height: 80px;
    background: ${props=>props.theme.colors.primaryGreen};
    animation: ${dsTopAnim} 1.5s;
`;

const AvatarHolder = styled.div`
    position: absolute;
    margin: auto;
    top: 40px;
    right: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 0 5px #151515,
                inset 0 0 0 5px #000000,
                inset 0 0 0 5px #000000,
                inset 0 0 0 5px #000000,
                inset 0 0 0 5px #000000,;
    background: white;
    overflow: hidden;
    animation: ${mvTop} 1.5s;
`;	

const ProfilePicture = styled.img`
	  width: 100%;
      height: 100%;
      object-fit: cover;
`;

const ProfileName = styled.div`
	position: absolute;
    margin: auto;
    top: 15px;
    right: 0;
    bottom: 0;
    left: 0;
    width: inherit;
    height: 40px;
    text-align: center;
    animation: ${fadeIn} 2s ease-in;
	font-size : ${props => props.theme.fontSizes.medium};
	a{
	 color: white;
      text-decoration: none;
      font-weight: 700;
      font-size: 18px;
        &:hover {
          text-decoration: underline;
          color: ${props=>props.theme.colors.primaryGreen};
		  cursor : pointer;
      }
	}
	h6{	
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      bottom: -5px;
      color: white;
      width: 40px;
 
	}
`;

const DsInfo = styled.div`
    position: absolute;
    margin: auto;
    top: 50px;
    bottom: 0;
    right: 0;
    left: 0;
    width: inherit;
    height: 40px;
    display: flex;
	.ds {
      &:nth-of-type(2) {
        animation-delay: .5s;
      }
      &:nth-of-type(1) {
        animation-delay: 1s;
      }
    }`;

const Details = styled.div`
      position: relative;
      width: 33%;
      text-align: center;
      color: white;
	  font-size : ${props => props.theme.fontSizes.medium};
      animation: ${fadeInMove} 2s;
      animation-fill-mode: forwards;
      h6 {
        text-transform: uppercase;
		color: ${props=>props.theme.colors.primaryGreen};
      }
      p {
        font-size: 1rem;
      }
	  &.following{
		p{
			margin-top : 55px;
		}
	  }
	`;




function UserCard(props) {
	const {user} = props;
	const history = useHistory();
	const [profileUrl, setProfileUrl] = useState(null);
	const [profileLoading, setProfileLoading] = useState(false);

  
	const profileStorageRef = ref(storage, `${user.uid}/Profile.jpg`);


  
	const redirectToProfile = async ()=>{
		//history push wouldnt work to change Users but it did to go back to the main screen so i made it async and added the await keyword to first 
		//go to the mainscreen then go to the user 
		await history.push('/');
		history.push(`/Users/${user.userName}`);
	};

	return (
		<Card>
			<DsTop/>
			<AvatarHolder>
				<ProfilePicture src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950" alt="Albert Einstein"/>
			</AvatarHolder>
			<ProfileName>
				<a  onClick={redirectToProfile} rel="noreferrer">{user && user.userName}</a>
				<h6 title="Followers"><i className="fas fa-users"></i> <span className="followers">{user && user.followers.length}</span></h6>
			</ProfileName>
			<DsInfo>
				<Details className="ds">
					<h6 title="Number of games wished by the user"> Wished Games <i className="fas fa-edit"></i></h6>
					<p>{user && user.wishList.length}</p>
				</Details>
				<Details className="ds">
					<h6 title="Number of games rated by the user"> Rated Games <i className="fas fa-project-diagram"></i></h6>
					<p>{user && user.ratings.length}</p>
				</Details>
				<Details className="ds following">
					<h6 title="Number of Following"> Following <i className="fas fa-comments"></i></h6>
					<p>{user && user.following.length}</p>
				</Details>
			</DsInfo>
		</Card>
	);
}


export default UserCard;
