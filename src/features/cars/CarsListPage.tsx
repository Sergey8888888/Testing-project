/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
import React, { useContext, useState } from 'react';
import CarItem from './CarItem';
import { appContext } from '../../context';
import './styles/cars.scss';

const CarsListPage = (): JSX.Element => {
  const { state } = useContext(appContext);
  const [sortKey, setSortKey] = useState<string | null>(null);
  // console.log(car,'----------');

  console.log(state,'---------')
  const sortedCars = [...state.cars].sort((a, b) => {
    if (sortKey === 'year') {
      return a.year - b.year;
    }
    if (sortKey === 'price') {
      return a.price - b.price;
    }
    return 0;
  });

  
  return (
    <>
      <h1 className="car-page__title">Cars List</h1>
      <div>
        <button onClick={() => setSortKey('year')}>Sort by Year</button>
        <button onClick={() => setSortKey('price')}>Sort by Price</button>
      </div>
      <div className="car-page__container">
        {sortedCars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}

      </div>
    </>
  );
};

export default CarsListPage;


