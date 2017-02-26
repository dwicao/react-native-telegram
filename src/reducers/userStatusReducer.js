import * as types from '../actions/actionTypes';

const exampleState = {
    name: 'Lutfi Dwica',
    email: 'lutfi@example.com',
};

const userStatusReducer = (state = exampleState, action) => {
	switch (action.type) {

		case types.CHANGE_USER_STATUS:
			return Object.assign({}, state, action.payload);

		default:
			return state;
	}
};

export default userStatusReducer;