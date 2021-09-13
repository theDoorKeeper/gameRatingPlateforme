/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import noImage from '../../assets/noImage.png';
import noCover from '../../assets/noCover.png';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const Wrapper = styled.div`
	position : relative;
	width : 15rem;
	height : 20rem;
	display : flex;
	flex-direction : column;
	justify-content : center;
	gap : 0.5rem;
	left : 10%;
	top : 60%;
	z-index : 2;
`;

const ProfilePicture = styled.img`
	width : 250px;
	height : 250px;
	border : 3px solid transparent;
	&:hover{
		border : 3px solid ${props => props.theme.colors.primaryGreen};
		cursor : pointer;
	}
`;

const ProfileName = styled.div`
	width : 100%;
	height : 2rem;
	font-size : ${props => props.theme.fontSizes.medium};
	color : white;
	text-align : center;
`;
const ProfileDate = styled.div`
	width : 100%;
	font-size : ${props => props.theme.fontSizes.small};
	color : ${props => props.theme.colors.transparentWhite};
	text-align : center;
`;

const CoverPicture = styled.div`
	width : 100%;
	height : 50%;
	background : url(${props=> props.image}) no-repeat center center fixed;
	background-color : ${props => props.theme.colors.backgroundGray};
	filter : 8px;
	background-size : cover;
`;

const DivMask = styled.div`
	width : 100%;
	height : 50%;
	position : absolute;
`;

const EditCoverLabel = styled.label`
	position : relative;
	top : -1%;
	height : 3rem;
	width : 10rem;
	font-size : ${props=> props.theme.fontSizes.medium};
	font-weight : bold;
	color : ${props=> props.theme.colors.transparentWhite}; 
	background :  ${props=> props.theme.colors.transparentBlack};
	border-radius : 5px;
	border : none ;
	cursor : pointer ;
	&:hover{
		color : ${props=> props.theme.colors.primaryGreen}; 
	}
	& input{
		width : 0.5rem;
		opacity : 0;
		cursor : pointer;
	}

`;


const EditProfileLabel = styled.label`
	position : relative;
	top : 90%;
	left : 15%;
	height : 3rem;
	width : 10rem;
	font-size : ${props=> props.theme.fontSizes.medium};
	font-weight : bold;
	color : ${props=> props.theme.colors.transparentWhite}; 
	background :  ${props=> props.theme.colors.transparentBlack};
	border-radius : 5px;
	border : none ;
	cursor : pointer ;
	&:hover{
		color : ${props=> props.theme.colors.primaryGreen}; 
	}
	& input{
		width : 0.5rem;
		opacity : 0;
		cursor : pointer;
	}

`;



function ProfileImages(props) {
	const [profileUrl, setProfileUrl] = useState(null);
	const [coverUrl, setCoverUrl] = useState(null);
	const [loading, setLoading] = useState(false);

	const {name, creationDate, user} = props;
	const profileInput = useRef();
	const coverInput = useRef();

	const storage = getStorage();
	  
	const profileStorageRef = ref(storage, `${user.uid}/Profile.jpg`);
	const coverStorageRef = ref(storage, `${user.uid}/Cover.jpg`);

	const uploadProfilePicture = (input) => {
	setLoading(true);	
    uploadBytes(profileStorageRef, input.current.files[0])
      .then((snapshot) => {
        console.log('Uploaded a profile pictureee');

      })
      .then(() => {
		  
        getDownloadURL(profileStorageRef).then((url) => {
          setProfileUrl(url);
          console.log(profileUrl);
		  setLoading(false);
        });
      })
      .catch((error) => {
        // Handle any errors
        console.log(error.message);
      });
  };

  const uploadCoverPicture = (input) => {
	  setLoading(true)
    uploadBytes(coverStorageRef, input.current.files[0])
      .then((snapshot) => {
        console.log('Uploaded a cover pictureee');

      })
      .then(() => {
		  
        getDownloadURL(coverStorageRef).then((url) => {
          setCoverUrl(url);
          console.log(coverUrl);
		  setLoading(false);
        });
      })
      .catch((error) => {
        // Handle any errors
        console.log(error.message);
      });
  };


  useEffect(() => {

	getDownloadURL(coverStorageRef).then((url) => {
		setCoverUrl(url);
		console.log(coverUrl);
	  });


	getDownloadURL(profileStorageRef).then((url) => {
		setProfileUrl(url);
		console.log(profileUrl);
	  });

  },)

	return (
		<CoverPicture image = {coverUrl ? coverUrl : noCover}> 
			<DivMask>
				<EditCoverLabel>
					Edit cover picture

					<input type="file" accept=".png, .jpg, .jpeg" ref={coverInput} onChange={ ()=>{coverInput.current.value && uploadCoverPicture(coverInput);} }  disabled={loading}/>

				</EditCoverLabel>
			</DivMask>
			<Wrapper>
				<DivMask>
					<EditProfileLabel>
					Edit profile picture
						<input type="file" accept=".png, .jpg, .jpeg" ref={profileInput} onChange={()=>{profileInput.current.value && uploadProfilePicture(profileInput);}} disabled={loading} />
					</EditProfileLabel>
				</DivMask>
				<ProfilePicture src = {profileUrl ? profileUrl : noImage}/>
				<ProfileName>{name}</ProfileName>
				<ProfileDate>member since : {creationDate}</ProfileDate>
			</Wrapper>
		</CoverPicture>
	);
}

export default ProfileImages;
