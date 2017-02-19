import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';
import * as colors from '../../colors';
import Dimensions from 'Dimensions';

const { width, height } = Dimensions.get('window');

const Topbar = props => {
	const {
		children,
		onPressLeft,
		onPressRight,
		imgLeft,
		imgRight,
	} = props;

	return (
		<View style={styles.container}>
			<View style={styles.left}>
				<TouchableOpacity onPress={onPressLeft}>
					<Image source={imgLeft} style={styles.icon} />
				</TouchableOpacity>
				{children}
			</View>
			{ props.enableRightButton &&
				<View style={styles.right}>
					<TouchableOpacity onPress={onPressRight}>
						<Image source={imgRight} style={styles.icon} />
					</TouchableOpacity>
				</View>
			}
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