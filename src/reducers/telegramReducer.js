import * as types from '../actions/actionTypes';

const telegramReducer = (state = [], action) => {
	switch (action.type) {

		case types.COBA:
			return [
				...state,
				action.payload
			];

		default:
			return state;
	}
};

export default telegramReducer;