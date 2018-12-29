import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from './userReducer';
import weatherReducer from './weatherReducer';
import historyReducer from './historyReducer';

export default combineReducers({
  user: userReducer,
  form: formReducer,
  weather: weatherReducer,
  history: historyReducer
});
