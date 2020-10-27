import { combineReducers } from 'redux';
import loginReducer from './login';
import registerClientReducer from './register';

const rootReducer = combineReducers({
  loginReducer,
  registerClientReducer,
});

export default rootReducer;
