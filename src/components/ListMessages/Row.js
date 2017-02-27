import React from 'react';
import Dimensions from 'Dimensions';
import {
	View,
	Text,
	Platform,
	StyleSheet,
} from 'react-native';
import * as colors from '../../colors';

const { width, height } = Dimensions.get('window');

const Row = props => {
	const {
		email,
		userStatus,
	} = props;

	const container = (email === userStatus.email) ? 
		[styles.container, styles.containerCurrentUser] :
		[styles.container, styles.containerOtherPeople];

	const chat = (email === userStatus.email) ?
		[styles. chat, styles.chatCurrentUser] :
		[styles.chat, styles.chatOtherPeople];
	
	return (
		<View style={container}>
			<View style={chat}>
				<Text style={styles.chatText}>
					Selamat Pagi!
				</Text>
			</View>
		</View>
	);
}

const BOTTOM_BLANK = (Platform.OS === 'ios') ? height * 0.035 : 0;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		marginVertical: width * 0.01,
		marginHorizontal: width * 0.02,
	},
	containerCurrentUser: {
		justifyContent: 'flex-end',
	},
	containerOtherPeople: {
		justifyContent: 'flex-start',
	},
	chat: {
		padding: width * 0.02,
		borderRadius: width * 0.02,
	},
	chatOtherPeople: {
		backgroundColor: colors.BASIC,
	},
	chatCurrentUser: {
		backgroundColor: colors.SECONDARY,
	},
	chatText: {
		backgroundColor: 'transparent',
	},
});

export default Row;