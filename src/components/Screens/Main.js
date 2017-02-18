import React from 'react';
import Drawer from 'react-native-drawer';
import {
	View,
	Text,
} from 'react-native';
import Container from '../Container';
import ControlPanel from '../ControlPanel';
import TopBar from '../TopBar';
import ListActive from '../ListActive';

const MainScreen = props => {
	let _drawer;

	const _onPress = () => _drawer.open();

	return (
		<Drawer
      type="overlay"
      content={<ControlPanel />}
      side='left'
      tapToClose={true}
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
				<TopBar onPress={_onPress} />
				<ListActive />
			</Container>
		</Drawer>
	);
};

const drawerStyles = {
  drawer: {},
  main: {
		paddingLeft: 3
	},
}

export default MainScreen;