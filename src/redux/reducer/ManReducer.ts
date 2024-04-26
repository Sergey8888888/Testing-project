/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable import/prefer-default-export */
import type { Action, State } from './types';

const initState: State = {
  mans: [],
};

export const MansReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case 'mans/load':
      return {
        ...state,
        mans: action.payload,
      };
    default:
      return state;
  }
};
