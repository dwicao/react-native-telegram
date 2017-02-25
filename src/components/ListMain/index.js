import React from 'react';
import {
	ListView,
	StyleSheet,
	Platform,
} from 'react-native';
import Dimensions from 'Dimensions';
import Row from './Row';
import demoData from './demoData';

const { width, height } = Dimensions.get('window');

const ListActive = props => {
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
		<ListView
		  style={styles.container}
		  dataSource={dataSource}
		  renderRow={(data) => <Row {...data} />}
		/>
	);
}

const BOTTOM_BLANK = (Platform.OS === 'ios') ? height * 0.035 : 0;

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  marginBottom: BOTTOM_BLANK,
	},
});

export default ListActive;