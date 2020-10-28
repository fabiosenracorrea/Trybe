import { CHAR_INFO, LOADING, ERROR } from '../../actions';
import { initialState } from '../../state';

export default function charReducer(state = initialState, action) {
  switch (action.type) {
    case CHAR_INFO:
      return { ...state, character: action.payload, loading: false }
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { character: '' , error: action.payload, loading: false }
    default:
      return state;
  }
}
