import { createStore, combineReducers } from 'redux';
import carReducer from './reducers/carReducer';
import signalReducer from './reducers/signalReducer';

const reducer = combineReducers({
  carReducer,
  signalReducer,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
