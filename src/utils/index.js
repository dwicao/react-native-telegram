import React from 'react';
import Dimensions from 'Dimensions';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const CrossPlatformIcon = ({ name, size, color, outline }) => {
  let iconName = Platform.OS === 'android' ? `md-${name}` : `ios-${name}`;
  if (Platform.OS === 'ios' && outline) {
    iconName = `${iconName}-outline`;
  }
  return <Icon name={iconName} size={size} color={color} />;
};

export function firstLetter(str) {
	return str.slice(0, 1).toUpperCase();
}

export const myWidth = Dimensions.get('window').width;
export const myHeight = Dimensions.get('window').height;