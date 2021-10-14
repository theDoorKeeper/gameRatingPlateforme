/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		primaryGreen: '#4db8bc',
		darkerGreen : '#459296',
		backgroundBlack: '#010101',
		backgroundGray : '#222222',
		grey : '#333',
		lightBlue: '#AFDBD2',
		lightGray : 'rgb(60, 60, 60)',
		backgroundBlue : '#012169',
		white : '#ffffff',
		transparentWhite : '#ffffffab',
		transparentBlack : '#00000086',
	},
	fonts: ['sans-serif', 'Roboto'],
	fontSizes: {
		small: '1em',
		medium: '1.5em',
		large: '3em'
	}
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
