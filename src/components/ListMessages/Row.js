import React from 'react';
import Dimensions from 'Dimensions';
import {
	View,
	Text,
	Platform,
	StyleSheet,
} from 'react-native';
import * as colors from '../../colors';
import * as utils from '../../utils';

const { width, height } = Dimensions.get('window');

const Row = props => {
	return (
		<View style={styles.container}>
			<View style={[styles.peopleCircle, {backgroundColor: colors.random()}]}>
				<Text style={styles.shortText}>
					{utils.firstLetter(props.name)}
				</Text>
			</View>
			<View style={styles.chatBubble}>
				<Text style={styles.chatText}>
					Test ini adalah rwefdf dsfsdf sasdsad sadasd asd asdas sadasd 
				</Text>
			</View>
		</View>
	);
}

const BOTTOM_BLANK = (Platform.OS === 'ios') ? height * 0.035 : 0;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: width * 0.01,
		marginHorizontal: width * 0.025,
	},
	peopleCircle: {
		marginRight: width * 0.02,
		alignItems: 'center',
		justifyContent: 'center',
		width: width * 0.11,
		height: width * 0.11,
		borderRadius: width * 0.3,
	},
	shortText: {
		color: colors.BASIC,
		fontWeight: 'bold',
		fontSize: width * 0.05,
	},
	chatBubble: {
		flex: 1,
		padding: width * 0.02,
		backgroundColor: 'white',
		borderRadius: width * 0.02,
	},
	chatText: {
		backgroundColor: 'transparent',
	},
});

export default Row;