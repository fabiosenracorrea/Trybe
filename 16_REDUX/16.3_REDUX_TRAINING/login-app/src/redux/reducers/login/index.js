import { LOGIN } from '../../actions/loginAction';
import { initialState } from '../../state';

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, login: { logged: true, email: action.email }};
    default:
      return state;
  }
}
