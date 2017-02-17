import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
} from 'react-native';
import * as colors from '../../colors';
import Dimensions from 'Dimensions';
import imgMenu from '../../images/menu.png';
import imgSearch from '../../images/search.png';

const { width, height } = Dimensions.get('window');

const Topbar = props => {
	return (
		<View style={styles.container}>
			<View style={styles.left}>
				<Image source={imgMenu} style={styles.icon} />
				<Text style={styles.title}>
					inTelegram
				</Text>
			</View>
			<View style={styles.right}>
				<Image source={imgSearch} style={styles.icon} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: width * 0.03,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: colors.PRIMARY,
		height: height * 0.08,
	},
	left: {
		flexDirection: 'row',
	},
	title: {
		fontSize: width * 0.06,
		paddingLeft: width * 0.09,
		color: colors.BASIC,
	},
	icon: {
		width: width * 0.08,
		height: width * 0.08,
	},
});

export default Topbar;