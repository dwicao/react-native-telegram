import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import Container from '../Container';
import TopBar from '../TopBar';
import ListActive from '../ListActive';

const MainScreen = props => {
	return (
		<Container>
			<TopBar />
			<ListActive />
		</Container>
	);
};

export default MainScreen;