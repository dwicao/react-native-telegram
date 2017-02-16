import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import App from './src/components/';
import * as actions from './src/actions/telegramActions';

const store = configureStore();

class telegram extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent( 'telegram', () => telegram );
