import React from 'react';
import {
	View,
	Text
} from 'react-native';

const Topbar = props => {
	console.log('Topbar props', props);
	return (
		<View style={{ flex: 1 }}>
			<Text style={{ fontSize: 28 }}>Ini TopBar</Text>
		</View>
	);
};

export default Topbar;