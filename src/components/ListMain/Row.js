import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import * as colors from '@colors';
import { myHeight, myWidth, firstLetter } from '@utils';

const Row = props => {
	const { name, previewMessage, id } = props;
	
	const onPress = () => Actions.messagesScreen({
		id,
		name,
		previewMessage,
	});

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} style={styles.button}>
				<View style={styles.left}>
					<View style={[styles.circle, {backgroundColor: colors.random()}]}>
						<Text style={styles.shortText}>
							{firstLetter(name)}
						</Text>
					</View>
					<View style={styles.text}>
						<Text numberOfLines={1} style={styles.h1}>
							{name}
						</Text>
						<Text numberOfLines={1} style={styles.h2}>
							{previewMessage}
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
		paddingHorizontal: myWidth * 0.03,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: myHeight * 0.11,
	},
	border : {
		marginLeft: myWidth * 0.2,
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
		width: myWidth * 0.15,
		height: myWidth * 0.15,
		borderRadius: myWidth * 0.3,
	},
	shortText: {
		color: colors.BASIC,
		backgroundColor: 'transparent',
		fontSize: myWidth * 0.07,
		fontWeight: 'bold',
	},
	text: {
		flex: 1,
		paddingHorizontal: myWidth * 0.025,
	},
	h1: {
		fontSize: myWidth * 0.045,
		fontWeight: 'bold',
		marginBottom: myWidth * 0.02,
	},
	h2: {
		fontSize: myWidth * 0.04,
	},
	time: {
	},
});

export default Row;