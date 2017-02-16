import { combineReducers } from 'redux';
import telegram from './telegramReducer';

const rootReducer = combineReducers({
	telegram
});

export default rootReducer;