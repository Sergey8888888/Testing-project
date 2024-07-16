export type Car = {
  id: number;
  name: string;
  model: string;
  year: number;
  color: string;
  price: number;
  latitude: number;
  longitude: number;
};

export type CarId = Car['id'];

export type State = {
  cars: Car[];
};

export type Action =
  | { type: 'cars/load'; payload: Car[] }
  | { type: 'cars/add'; payload: Car }
  | { type: 'cars/remove'; payload: CarId }
  | { type: 'cars/update'; payload: Car };

