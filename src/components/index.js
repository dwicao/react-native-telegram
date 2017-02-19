import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainScreen from './Screens/Main';
import MessagesScreen from './Screens/Messages';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='mainScreen'
          	animation='fade'
          	component={MainScreen}
            panHandlers={null}
          	hideNavBar={true} />
          <Scene key='messagesScreen'
            animation='fade'
            component={MessagesScreen}
            panHandlers={null}
            hideNavBar={true} initial />
        </Scene>
      </Router>
    );
  }
}
