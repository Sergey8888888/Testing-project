import type { Hero } from '../../features/heroes/types';


export type State = {
  Mans: Man[];
};





export type Action =
  | { type: 'Mans/load'; payload: Man[] }
 