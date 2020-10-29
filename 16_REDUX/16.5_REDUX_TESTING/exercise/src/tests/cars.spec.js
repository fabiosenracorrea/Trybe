import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Cars from '../Cars'
import { reducer } from '../redux';

const carColors = ['red', 'blue', 'yellow'];

const initialState = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

const differentState = {
  cars: {
    red: false,
    blue: true,
    yellow: false,
  },
}

const pointlessStore = createStore(reducer);
const initialStore = createStore(reducer, initialState);
const differentStore = createStore(reducer, differentState);

describe('Cars.jsx testing', () => {
  it('should have 3 move buttons', () => {
    const { getAllByText } = render(
      <Provider store={pointlessStore}>
        <Cars />
      </Provider>
    );

    const EXPECTED_NUMBER = 3;

    const moveButtons = getAllByText('move');
    expect(moveButtons.length).toBe(EXPECTED_NUMBER);

    moveButtons.forEach(button => {
      expect(button.tagName).toBe('BUTTON');
    });
  });

  it('should start all 3 cars on the left and with specific colors', () => {
    const { getByAltText } = render(
      <Provider store={initialStore}>
        <Cars />
      </Provider>
    );

    const EXPECTED_CLASS = 'car-left';

    carColors.forEach(color => {
      const carPattern = new RegExp(color, 'i');
      const carImg = getByAltText(carPattern);
      expect(carImg).toBeInTheDocument();
      expect(carImg.className).toBe(EXPECTED_CLASS);
    });
  });

  it('should move the car to the right when clicking on the move button', () => {
    const { getByTestId,getByAltText } = render(
      <Provider store={initialStore}>
        <Cars />
      </Provider>
    );

    const EXPECTED_CLASS = 'car-right';

    carColors.forEach(color => {
      const carPattern = new RegExp(color, 'i');
      const respectiveMoveButton = getByTestId(carPattern);

      fireEvent.click(respectiveMoveButton);
      const carImg = getByAltText(carPattern);

      expect(carImg.className).toBe(EXPECTED_CLASS);
    });
  });

  it('should adapt for different states that it receives', () => {
    const { getByAltText } = render(
      <Provider store={differentStore}>
        <Cars />
      </Provider>
    );

    const RIGHT = 'car-right';
    const LEFT = 'car-left';
    const CAR_ON_THE_RIGHT = 'blue';

    carColors.forEach(color => {
      const carPattern = new RegExp(color, 'i');

      const carImg = getByAltText(carPattern);

      if (color === CAR_ON_THE_RIGHT) {
        expect(carImg.className).toBe(RIGHT);
      } else {
        expect(carImg.className).toBe(LEFT);
      }
    });
  });
});
