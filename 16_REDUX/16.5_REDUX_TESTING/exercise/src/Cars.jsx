import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { connect } from 'react-redux';
import { moveCar } from './redux/actionCreators';

function Cars({
  redCar, blueCar, yellowCar, moveCar,
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => moveCar('red', !redCar)} data-testid="move-red" type="button">move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => moveCar('blue', !blueCar)} data-testid="move-blue" type="button">move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => moveCar('yellow', !yellowCar)} data-testid="move-yellow" type="button">move</button>
      </div>
    </div>
  );
}

function actionDeliver(dispatch) {
  return {
    moveCar: (car, side) => dispatch(moveCar(car, side)),
  }
}

function stateDeliver(state) {
  return {
    redCar: state.cars.red,
    blueCar: state.cars.blue,
    yellowCar: state.cars.yellow,
  }
}

export default connect(stateDeliver, actionDeliver)(Cars);
