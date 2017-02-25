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
		</View>
	);
}

const BOTTOM_BLANK = (Platform.OS === 'ios') ? height * 0.035 : 0;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	peopleCircle: {
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
});

export default Row;