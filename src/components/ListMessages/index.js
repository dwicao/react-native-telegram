import React from 'react';
import Dimensions from 'Dimensions';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Platform,
} from 'react-native';
import TopBar from '../TopBar';
import * as colors from '../../colors';
import * as utils from '../../utils';
import imgArrowBack from '../../images/arrow_back.png';

const EXAMPLE_NAME = 'Lutfi Dwica';
const { width, height } = Dimensions.get('window');

const ListMessages = props => {
	const _onPressLeft = () => Actions.mainScreen({
		type: ActionConst.RESET,
	});

	const renderList = index => (
		<View key={index}>
			<View style={[styles.peopleCircle, {backgroundColor: colors.random()}]}>
				<Text style={styles.shortText}>
					{utils.firstLetter(EXAMPLE_NAME)}
				</Text>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			<TopBar 
				imgLeft={imgArrowBack}
				onPressLeft={_onPressLeft}
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
			<ScrollView style={styles.scroll}
        showsVerticalScrollIndicator={false}>
				{ [...Array(20)].map((_, index) => renderList(index)) }
			</ScrollView>
		</View>
	)
};


const BOTTOM_BLANK = (Platform.OS === 'ios') ? height * 0.035 : 0;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: BOTTOM_BLANK,
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
	name: {
		fontSize: width * 0.045,
		fontWeight: 'bold',
		color: colors.BASIC,
	}
});

export default ListMessages;