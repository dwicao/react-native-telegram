import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Alert,
} from 'react-native';
import * as colors from '../../colors';
import Dimensions from 'Dimensions';
import imgMenu from '../../images/menu.png';
import imgPersonAdd from '../../images/person_add.png';

const { width, height } = Dimensions.get('window');

const Topbar = props => {
	const { onPress } = props;

	const handleSearch = () => {
		Alert.alert("pencet search");
	}

	return (
		<View style={styles.container}>
			<View style={styles.left}>
				<TouchableOpacity onPress={onPress}>
					<Image source={imgMenu} style={styles.icon} />
				</TouchableOpacity>
				<Text style={styles.title}>
					inTelegram
				</Text>
			</View>
			<View style={styles.right}>
				<TouchableOpacity onPress={handleSearch}>
					<Image source={imgPersonAdd} style={styles.icon} />
				</TouchableOpacity>
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