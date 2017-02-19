import React from 'react';
import Drawer from 'react-native-drawer';
import Dimensions from 'Dimensions';
import {
	View,
	Text,
  Alert,
  StyleSheet,
} from 'react-native';
import Container from '../Container';
import ControlPanel from '../ControlPanel';
import TopBar from '../TopBar';
import ListMain from '../ListMain';
import * as colors from '../../colors';
import imgMenu from '../../images/menu.png';
import imgPersonAdd from '../../images/person_add.png';

const { width, height } = Dimensions.get('window');

const MainScreen = props => {
	let _drawer;

	const _onPressLeft = () => _drawer.open();
  const _onPressRight = () => Alert.alert('pencet kanan');

	return (
		<Drawer
      type="overlay"
      content={<ControlPanel />}
      side='left'
      tapToClose={true}
      negotiatePan={true}
      openDrawerOffset={0.15} // 20% gap on the right side of drawer
      panCloseMask={0.15}
      panOpenMask={0.1}
      closedDrawerOffset={-3}
      styles={drawerStyles}
			ref={el => _drawer = el}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
    >
			<Container>
				<TopBar 
          onPressLeft={_onPressLeft}
          onPressRight={_onPressRight}
          imgLeft={imgMenu}
          imgRight={imgPersonAdd}
          enableRightButton={true}
        >
          <Text style={styles.title}>
            inTelegram
          </Text>
        </TopBar>
				<ListMain />
			</Container>
		</Drawer>
	);
};

const styles = StyleSheet.create({
  title: {
    fontSize: width * 0.06,
    paddingLeft: width * 0.09,
    color: colors.BASIC,
  },
});

const drawerStyles = {
  drawer: {},
  main: {
		paddingLeft: 3
	},
}

export default MainScreen;