import React from 'react';
import { 
	View,
	Image,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as colors from '../../colors';
import { myHeight, myWidth, firstLetter } from '../../utils';

const EXAMPLE_NAME = 'Lutfi Dwica';

const ControlPanel = props => {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={[styles.circle, {backgroundColor: colors.random()}]}>
					<Text style={styles.shortText}>
						{firstLetter(EXAMPLE_NAME)}
					</Text>
				</View>
				<Text numberOfLines={1} style={styles.h1}>
					{EXAMPLE_NAME}
				</Text>
				<Text numberOfLines={1} style={styles.h2}>
					lutfi@example.com
				</Text>
			</View>
			<View style={styles.bottom}>
				<TouchableOpacity style={styles.button}>
					<Icon name="exit-to-app" size={myWidth * 0.07} color={colors.DARK} />
					<Text style={styles.buttonText}>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Icon name="exit-to-app" size={myWidth * 0.07} color={colors.DARK} />
					<Text style={styles.buttonText}>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Icon name="exit-to-app" size={myWidth * 0.07} color={colors.DARK} />
					<Text style={styles.buttonText}>Logout</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: colors.BASIC,
	},
	top: {
		height: myHeight * 0.22,
		backgroundColor: 'gray',
	},
	bottom: {
		height: myHeight * 0.88,
		borderColor: colors.BORDER,
		borderRightWidth: 1,
		paddingVertical: myHeight * 0.01,
	},
	shortText: {
		color: colors.BASIC,
		fontSize: myWidth * 0.07,
		fontWeight: 'bold',
	},
	h1: {
		color: colors.BASIC,
		fontSize: myWidth * 0.04,
		fontWeight: 'bold',
		marginHorizontal: myWidth * 0.05,
	},
	h2: {
		color: colors.BASIC,
		fontSize: myWidth * 0.04,
		marginHorizontal: myWidth * 0.05,
		marginBottom: myWidth * 0.05,
	},
	circle: {
		margin: myWidth * 0.05,
		alignItems: 'center',
		justifyContent: 'center',
		width: myWidth * 0.15,
		height: myWidth * 0.15,
		borderRadius: myWidth * 0.3,
	},
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingHorizontal: myWidth * 0.03,
		paddingVertical: myWidth * 0.02,
	},
	buttonText: {
		fontSize: myWidth * 0.045,
		marginLeft: myWidth * 0.03,
	},
});

export default ControlPanel;