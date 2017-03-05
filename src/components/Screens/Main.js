import React from 'react';
import Drawer from 'react-native-drawer';
import {
	View,
	Text,
  Alert,
  StyleSheet,
} from 'react-native';
import Container from '@components/Container';
import ControlPanel from '@components/ControlPanel';
import TopBar from '@components/TopBar';
import ListMain from '@components/ListMain';
import * as colors from '@colors';
import { myHeight, myWidth, firstLetter } from '@utils';

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
    fontSize: myWidth * 0.06,
    paddingLeft: myWidth * 0.09,
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