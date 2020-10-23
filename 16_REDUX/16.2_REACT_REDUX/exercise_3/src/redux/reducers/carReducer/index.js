import { MOVE_CAR } from '../../actions/moveCar';
import { initialCars } from '../../states/index';

export default function carReducer(state = initialCars, action) {
  switch (action.type) {
    case MOVE_CAR:
      return {...state, cars: { ...state.cars, [action.car]: action.side }};
    default:
      return state;
  }
}
