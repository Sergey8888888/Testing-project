import React, { useContext } from 'react';
import './styles/cars.scss';
import { useParams } from 'react-router-dom';
import { appContext } from '../../context';

const CarItemPage = (): JSX.Element => {
  const { carId } = useParams<{ carId: string }>();
  const { state } = useContext(appContext);
  const currentCar = carId && state.cars.find((car) => car.id === Number(carId));

  return currentCar ? (
    <div className="car-item-page__item">
      <h2 className="car-item-page__item--name">{currentCar.name}</h2>
      <h3 className="car-item-page__item--model">{currentCar.model}</h3>
      <h4 className="car-item-page__item--year">Year: {currentCar.year}</h4>
      <h4 className="car-item-page__item--color"> {currentCar.color}</h4>
      <h4 className="car-item-page__item--price">Price: {currentCar.price}</h4>
      <h4 className="car-item-page__item--latitude">Latitude: {currentCar.latitude}</h4>
      <h4 className="car-item-page__item--longitude">Longitude: {currentCar.longitude}</h4>
    
    </div>
  ) : (
    <h1>Такой машины нет!!!!</h1>
  );
};

export default CarItemPage;

