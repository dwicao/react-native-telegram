import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import Dimensions from 'Dimensions';
import * as colors from '../../colors';
import * as utils from '../../utils';

const { width, height } = Dimensions.get('window');

const Row = props => {
	const onPress = () => Actions.messagesScreen();

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} style={styles.button}>
				<View style={styles.left}>
					<View style={[styles.circle, {backgroundColor: colors.random()}]}>
						<Text style={styles.shortText}>
							{utils.firstLetter(props.name)}
						</Text>
					</View>
					<View style={styles.text}>
						<Text numberOfLines={1} style={styles.h1}>
							{props.name}
						</Text>
						<Text numberOfLines={1} style={styles.h2}>
							{props.previewMessage}
						</Text>
					</View>
				</View>
				<View style={styles.right}>
					<Text style={styles.time}>19:45</Text>
				</View>
			</TouchableOpacity>
			<View style={styles.border} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		paddingHorizontal: width * 0.03,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: height * 0.11,
	},
	border : {
		marginLeft: width * 0.2,
		borderBottomWidth: 1,
		borderColor: colors.BORDER,
	},
	left: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
	},
	right: {
	},
	circle: {
		alignItems: 'center',
		justifyContent: 'center',
		width: width * 0.15,
		height: width * 0.15,
		borderRadius: width * 0.3,
	},
	shortText: {
		color: colors.BASIC,
		backgroundColor: 'transparent',
		fontSize: width * 0.07,
		fontWeight: 'bold',
	},
	text: {
		flex: 1,
		paddingHorizontal: width * 0.025,
	},
	h1: {
		fontSize: width * 0.045,
		fontWeight: 'bold',
		marginBottom: width * 0.02,
	},
	h2: {
		fontSize: width * 0.04,
	},
	time: {
	},
});

export default Row;