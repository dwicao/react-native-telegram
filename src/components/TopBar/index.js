import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import * as colors from '../../colors';
import Dimensions from 'Dimensions';

const { width, height } = Dimensions.get('window');

const Topbar = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				inTelegram
			</Text>
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		backgroundColor: colors.PRIMARY,
		height: height * 0.08,
	},
	title: {
		fontSize: 24,
		color: colors.BASIC,
	},
});

export default Topbar;