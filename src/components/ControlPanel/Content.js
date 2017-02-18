import React from 'react';
import { 
	View,
	Text,
	StyleSheet
} from 'react-native';

const ControlPanel = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>INI ControlPanel</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: 'white',
	},
	text: {
		fontSize: 28,
	}
});

export default ControlPanel;