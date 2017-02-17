import React from 'react';
import {
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
} from 'react-native';
import Dimensions from 'Dimensions';

const { width, height } = Dimensions.get('window');

const ListActive = props => {
	const renderList = () => (
		<View style={styles.list}>
			<TouchableOpacity style={styles.button}>
				<View style={styles.left}>
					<View style={styles.circle} />
					<View style={styles.text}>
						<Text style={styles.h1}>
							Cloningan Telegram
						</Text>
						<Text style={styles.h2}>
							Mantap! mari kita belajar...
						</Text>
					</View>
				</View>
				<View style={styles.right}>
					<Text style={styles.time}>19:20</Text>
				</View>
			</TouchableOpacity>
		</View>
	);

	return (
		<ScrollView style={styles.scroll}>
			{ renderList() }
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scroll: {
		flex: 1,
	},
	button: {
		paddingHorizontal: width * 0.03,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#cccccc',
		height: height * 0.11,
	},
	left: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	right: {
	},
	circle: {
		width: width * 0.15,
		height: width * 0.15,
		borderRadius: width * 0.3,
		backgroundColor: 'gray',
	},
	text: {
		paddingLeft: width * 0.025,
	},
	h1: {
		fontSize: width * 0.045,
		fontWeight: 'bold',
		marginBottom: width * 0.02,
	},
	h2: {
		fontSize: width * 0.04,
	},
	time: {
		color: 'blue',
	},
});

export default ListActive;