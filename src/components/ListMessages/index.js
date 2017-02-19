import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Alert,
} from 'react-native';
import TopBar from '../TopBar';
import imgArrowBack from '../../images/arrow_back.png';

const ListMessages = props => {
	return (
		<View style={styles.container}>
			<TopBar 
				imgLeft={imgArrowBack}
				onPressLeft={() => Alert.alert('ini left')}
			>
				<Text>
					mantap
				</Text>
			</TopBar>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default ListMessages;