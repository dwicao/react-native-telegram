import React from 'react';
import Dimensions from 'Dimensions';
import { Actions, ActionConst } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
	View,
	Text,
	StyleSheet,
	ListView,
	Platform,
} from 'react-native';
import TopBar from '../TopBar';
import Row from './Row';
import Input from './Input';
import KeyboardSpacer from '../KeyboardSpacer';
import * as colors from '../../colors';
import * as utils from '../../utils';
import imgArrowBack from '../../images/arrow_back.png';
import demoData from '../demoData';

const EXAMPLE_NAME = 'Lutfi Dwica';
const { width, height } = Dimensions.get('window');

const ListMessages = props => {
	const _onPressLeft = () => Actions.mainScreen({
		type: ActionConst.RESET,
	});

	const formatData = (data) => {
		let dataBlob = {};

		data.map((person, index) => {
			dataBlob[index] = person;
		});

		return dataBlob;
	}

	const ds = new ListView.DataSource({
		rowHasChanged: (r1, r2) => r1 !== r2,
	});

	const dataBlob = formatData(demoData);

	const dataSource = ds.cloneWithRows(dataBlob);

	return (
		<View style={styles.container}>
			<TopBar 
				imgLeft={imgArrowBack}
				onPressLeft={_onPressLeft}
				iconLeftName="arrow-back"
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
			<ListView
			  style={styles.listview}
			  dataSource={dataSource}
			  renderRow={(data) => <Row {...data} {...props} />}
			/>
			<Input />
			<KeyboardSpacer />
		</View>
	)
};


const BOTTOM_BLANK = (Platform.OS === 'ios') ? height * 0.035 : 0;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: BOTTOM_BLANK,
		backgroundColor: colors.THIRD,
	},
	listview: {
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