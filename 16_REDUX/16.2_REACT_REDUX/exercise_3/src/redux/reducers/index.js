import { combineReducers } from 'redux';
import carReducer from './carReducer';
import signalReducer from './signalReducer';

const reducer = combineReducers({
  carReducer,
  signalReducer,
})

export default reducer;
