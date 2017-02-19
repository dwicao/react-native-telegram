import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

const ListMessages = props => {
	return (
		<View style={styles.container}>
			<Text>
				This is ListMessages
			</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default ListMessages;