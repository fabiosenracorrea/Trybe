import { REGISTER, UNREGISTER } from '../../actions/registerAction';
import { initialState } from '../../state';

export default function registerClientReducer(state = initialState, action) {
  const { clients: oldClients } = state.register;
  const { client: newClient, type } = action;

  switch (type) {
    case REGISTER:
      return {...state, register: { clients: [...oldClients, newClient] }};
    case UNREGISTER:
      const newClients = oldClients.filter(oldClient => oldClient.email !== newClient.email)
      return {...state, register: { clients: newClients }};
    default:
      return state;
  }
}
