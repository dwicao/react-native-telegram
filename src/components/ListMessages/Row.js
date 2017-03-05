import React from 'react';
import {
	View,
	Text,
	Platform,
	StyleSheet,
} from 'react-native';
import * as colors from '../../colors';
import { myHeight, myWidth } from '../../utils';

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

const BOTTOM_BLANK = (Platform.OS === 'ios') ? myHeight * 0.035 : 0;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		marginVertical: myWidth * 0.01,
		marginHorizontal: myWidth * 0.02,
	},
	containerCurrentUser: {
		justifyContent: 'flex-end',
	},
	containerOtherPeople: {
		justifyContent: 'flex-start',
	},
	chat: {
		padding: myWidth * 0.02,
		borderRadius: myWidth * 0.02,
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