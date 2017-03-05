import React, { PropTypes } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as colors from '../../colors';
import Dimensions from 'Dimensions';

const { width, height } = Dimensions.get('window');

const TopBar = props => {
	const {
		children,
		onPressLeft,
		onPressRight,
		iconLeftName,
		enableRightButton,
	} = props;

	return (
		<View style={styles.container}>
			<View style={styles.left}>
				<TouchableOpacity onPress={onPressLeft}>
					<Icon name={iconLeftName} size={width * 0.08} color={colors.BASIC} />
				</TouchableOpacity>
				{children}
			</View>
			{ enableRightButton &&
				<View style={styles.right}>
					<TouchableOpacity onPress={onPressRight}>
						<Icon name="person-add" size={width * 0.08} color={colors.BASIC} />
					</TouchableOpacity>
				</View>
			}
		</View>
	);
};

TopBar.defaultProps = {
	iconLeftName: "menu",
};

TopBar.propTypes = {
	onPressLeft: PropTypes.func.isRequired,
	onPressRight: PropTypes.func,
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
});

export default TopBar;