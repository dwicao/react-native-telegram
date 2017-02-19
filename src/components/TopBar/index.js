import React, { PropTypes } from 'react';
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

const TopBar = props => {
	const {
		children,
		onPressLeft,
		imgLeft,
		onPressRight,
		imgRight,
		enableRightButton,
	} = props;

	return (
		<View style={styles.container}>
			<View style={styles.left}>
				<TouchableOpacity onPress={onPressLeft}>
					<Image source={imgLeft} style={styles.icon} />
				</TouchableOpacity>
				{children}
			</View>
			{ enableRightButton &&
				<View style={styles.right}>
					<TouchableOpacity onPress={onPressRight}>
						<Image source={imgRight} style={styles.icon} />
					</TouchableOpacity>
				</View>
			}
		</View>
	);
};

TopBar.propTypes = {
	onPressLeft: PropTypes.func.isRequired,
	imgLeft: PropTypes.number.isRequired,
	onPressRight: PropTypes.func,
	imgRight: PropTypes.number,
	enableRightButton: PropTypes.bool,
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
		alignItems: 'center',
		flexDirection: 'center',
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

export default TopBar;