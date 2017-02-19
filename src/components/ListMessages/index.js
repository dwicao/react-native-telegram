import React from 'react';
import Dimensions from 'Dimensions';
import {
	View,
	Text,
	StyleSheet,
	Alert,
} from 'react-native';
import TopBar from '../TopBar';
import * as colors from '../../colors';
import * as utils from '../../utils';
import imgArrowBack from '../../images/arrow_back.png';

const EXAMPLE_NAME = 'Lutfi Dwica';
const { width, height } = Dimensions.get('window');

const ListMessages = props => {
	return (
		<View style={styles.container}>
			<TopBar 
				imgLeft={imgArrowBack}
				onPressLeft={() => Alert.alert('ini left')}
			>
				<View style={[styles.circle, {backgroundColor: colors.random()}]}>
					<Text style={styles.shortText}>
						{utils.firstLetter(EXAMPLE_NAME)}
					</Text>
				</View>
				<Text style={styles.name}>
					{EXAMPLE_NAME}
				</Text>
			</TopBar>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	circle: {
		alignItems: 'center',
		justifyContent: 'center',
		width: width * 0.11,
		height: width * 0.11,
		borderRadius: width * 0.3,
		marginLeft: width * 0.06,
		marginRight: width * 0.03,
	},
	shortText: {
		color: colors.BASIC,
		fontWeight: 'bold',
		fontSize: width * 0.05,
	},
	name: {
		fontSize: width * 0.045,
		fontWeight: 'bold',
		color: colors.BASIC,
	}
});

export default ListMessages;