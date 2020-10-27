import { REGISTER } from '../../actions/registerAction';
import { initialState } from '../../state';

export default function registerClientReducer(state = initialState, action) {
  const { clients: oldClients } = state.register;
  const { client: newClient, type } = action;

  switch (type) {
    case REGISTER:
      return {...state, register: { clients: [...oldClients, newClient] }};
    default:
      return state;
  }
}
