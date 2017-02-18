import React from 'react';
import Dimensions from 'Dimensions';
import { 
	View,
	Image,
	Text,
	StyleSheet
} from 'react-native';
import * as colors from '../../colors';

const { width, height } = Dimensions.get('window');

const ControlPanel = props => {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={[styles.circle, {backgroundColor: colors.random()}]}/>
				<Text numberOfLines={1} style={styles.h1}>
					Lutfi Dwica
				</Text>
				<Text numberOfLines={1} style={styles.h2}>
					lutfi@example.com
				</Text>
			</View>
			<View style={styles.bottom}>
				<Text>ini bottom</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: colors.BASIC,
	},
	top: {
		height: height * 0.22,
		backgroundColor: 'gray',
	},
	bottom: {
		height: height * 0.88,
		borderColor: colors.BORDER,
		borderRightWidth: 1,
	},
	h1: {
		color: colors.BASIC,
		fontSize: width * 0.04,
		fontWeight: 'bold',
		marginHorizontal: width * 0.05,
	},
	h2: {
		color: colors.BASIC,
		fontSize: width * 0.04,
		marginHorizontal: width * 0.05,
		marginBottom: width * 0.05,
	},
	circle: {
		margin: width * 0.05,
		alignItems: 'center',
		justifyContent: 'center',
		width: width * 0.15,
		height: width * 0.15,
		borderRadius: width * 0.3,
	},
});

export default ControlPanel;