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
	const {
		email,
		userStatus,
	} = props;

	const container = (email === userStatus.email) ? styles.containerCurrentUser : styles.containerOtherPeople;
	const chat = (email === userStatus.email) ? styles.chatCurrentUser : styles.chatOtherPeople;
	
	return (
		<View style={container}>
			<View style={chat}>
				<Text style={styles.chatText}>
					Test ini adalah
				</Text>
			</View>
		</View>
	);
}

const BOTTOM_BLANK = (Platform.OS === 'ios') ? height * 0.035 : 0;

const styles = StyleSheet.create({
	containerCurrentUser: {
		flex: 1,
		justifyContent: 'flex-end',
		flexDirection: 'row',
		marginVertical: width * 0.01,
		marginHorizontal: width * 0.02,
	},
	containerOtherPeople: {
		flex: 1,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		marginVertical: width * 0.01,
		marginHorizontal: width * 0.02,
	},
	chatOtherPeople: {
		padding: width * 0.02,
		backgroundColor: 'white',
		borderRadius: width * 0.02,
	},
	chatCurrentUser: {
		padding: width * 0.02,
		backgroundColor: '#efffde',
		borderRadius: width * 0.02,
	},
	chatText: {
		backgroundColor: 'transparent',
	},
});

export default Row;