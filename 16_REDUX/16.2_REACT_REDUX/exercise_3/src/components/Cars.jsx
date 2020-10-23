import React from 'react';
import carBlue from '../images/carBlue.jpeg';
import carRed from '../images/carRed.jpeg';
import carYellow from '../images/carYellow.jpeg';
import { connect } from 'react-redux';
import { moveCar } from '../redux/actions/moveCar';

function Cars({
  redCar, blueCar, yellowCar, moveCar
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => moveCar('red', !redCar)} type="button">Move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => moveCar('blue', !blueCar)} type="button">Move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => moveCar('yellow', !yellowCar)} type="button">Move</button>
      </div>
    </div>
  );
}

function deliverState(state) {
  return {
    redCar: state.carReducer.cars.red,
    blueCar: state.carReducer.cars.blue,
    yellowCar: state.carReducer.cars.yellow,
  };
}

function dispatchProps(dispatch) {
  return {
    moveCar: (car, side) => dispatch(moveCar(car, side)),
  };
}

export default connect(deliverState, dispatchProps)(Cars)
