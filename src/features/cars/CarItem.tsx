/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useContext, useState } from 'react';
import type { Car, CarId } from './types';
import { appContext } from '../../context';

const CarItem = ({ car }: { car: Car }): JSX.Element => {
  const { dispatch } = useContext(appContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCar, setEditedCar] = useState(car);


console.log(car,'---------');

  const handleRemoveCar = async (id: CarId): Promise<void> => {
    const res = await fetch(`https://test.tspb.su/test-task/vehicles/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      dispatch({ type: 'cars/remove', payload: id });
    }
  };

  const handleEditCar = async (): Promise<void> => {
    const res = await fetch(`https://test.tspb.su/test-task/vehicles/${car.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedCar),
    });
    const updatedCar: Car = await res.json();
    dispatch({ type: 'cars/update', payload: updatedCar });
    setIsEditing(false);
  };

  return (
    <div className="car-page__item">
      {isEditing ? (
        <div>
          <input
            value={editedCar.name}
            onChange={(e) => setEditedCar({ ...editedCar, name: e.target.value })}
          />
          <input
            value={editedCar.model}
            onChange={(e) => setEditedCar({ ...editedCar, model: e.target.value })}
          />
          <input
            value={editedCar.year}
            onChange={(e) => setEditedCar({ ...editedCar, year: Number(e.target.value) })}
          />
          <input
            value={editedCar.color}
            onChange={(e) => setEditedCar({ ...editedCar, color: (e.target.value) })}
          />
          <input
            value={editedCar.price}
            onChange={(e) => setEditedCar({ ...editedCar, price: Number(e.target.value) })}
          />
          <input
            value={editedCar.latitude}
            onChange={(e) => setEditedCar({ ...editedCar, latitude: Number(e.target.value) })}
          />
          <input
            value={editedCar.longitude}
            onChange={(e) => setEditedCar({ ...editedCar, longitude: Number(e.target.value) })}
          />
          <button onClick={handleEditCar}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <h2 className="car-page__item--name">{car.name}</h2>
          <h3 className="car-page__item--model">{car.model}</h3>
          <p className="car-page__item--year">Year: {car.year}</p>
          <p className="car-page__item--color"> {car.color}</p>
          <p className="car-page__item--price">Price: {car.price}</p>
          <p className="car-page__item--latitude">Latitude: {car.latitude}</p>
          <p className="car-page__item--longitude">Longitude: {car.longitude}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => handleRemoveCar(car.id)}>Remove</button>
        </>
      )}
    </div>
  );
};

export default CarItem;