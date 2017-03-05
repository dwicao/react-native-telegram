import Dimensions from 'Dimensions';

export function firstLetter(str) {
	return str.slice(0, 1).toUpperCase();
}

export const myWidth = Dimensions.get('window').width;
export const myHeight = Dimensions.get('window').height;