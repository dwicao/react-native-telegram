import React from 'react';
import {
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
	Platform,
} from 'react-native';
import Dimensions from 'Dimensions';
import * as colors from '../../colors';

const { width, height } = Dimensions.get('window');

const ListActive = props => {
	const renderList = index => (
		<View key={index} style={styles.list}>
			<TouchableOpacity style={styles.button}>
				<View style={styles.left}>
					<View style={[styles.circle, {backgroundColor: colors.random()}]} />
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
			<View style={styles.border} />
		</View>
	);

	return (
		<ScrollView style={styles.scroll}>
			{ [...Array(20)].map((_, index) => renderList(index)) }
		</ScrollView>
	);
}

const BOTTOM_BLANK = (Platform.OS === 'ios') ? height * 0.04 : 0;

const styles = StyleSheet.create({
	scroll: {
		flex: 1,
		marginBottom: BOTTOM_BLANK,
	},
	button: {
		paddingHorizontal: width * 0.03,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: height * 0.11,
	},
	border : {
		marginLeft: width * 0.2,
		borderBottomWidth: 1,
		borderColor: 'rgba(0, 0, 0, 0.1)',
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