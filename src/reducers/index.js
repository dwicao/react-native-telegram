import { combineReducers } from 'redux';
import telegram from './telegramReducer';
import userStatus from './userStatusReducer';

const rootReducer = combineReducers({
	telegram,
	userStatus,
});

export default rootReducer;