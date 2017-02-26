import * as types from './actionTypes';

export const coba = (payload) => ({
	type: types.COBA,
	payload,
})

export const changeUserStatus = (payload) => ({
	type: types.CHANGE_USER_STATUS,
	payload,
});