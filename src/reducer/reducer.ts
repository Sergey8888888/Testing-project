/* eslint-disable import/prefer-default-export */
import type { Action, State } from './types';

export const initState: State = {
  cars: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'cars/load':
      return {
        ...state,
        cars: action.payload,
      };
    case 'cars/add':
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case 'cars/remove':
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    case 'cars/update':
      return {
        ...state,
        cars: state.cars.map((car) => (car.id === action.payload.id ? action.payload : car)),
      };
    default:
      return state;
  }
};
