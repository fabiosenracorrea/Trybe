import { CHANGE_SIGNAL } from '../../actions/signalColor';
import { initialSignal } from '../../states/index';

export default function signalReducer(state = initialSignal, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return {...state, signal: { color: action.payload }};
    default:
      return state;
  }
}
