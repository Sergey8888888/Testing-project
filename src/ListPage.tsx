/* eslint-disable arrow-body-style */
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { type RootState } from '../../redux/store';
// import MainPage from './MainPage';

const ListPage = ({data}): JSX.Element => {
  // const data = useSelector((store: RootState) => store.manes.manes);

  // const navigate = useNavigate();
console.log(data);

  return (
    <>
      <h1 className="man-page__title">ListPage</h1>
      <div className="man-page__container">
        {data && data.map((el) => (
          <div>{el.name}</div>
        ))}
      </div>
      {/* <button onClick={() => navigate(5)} type="button">
         назад
      </button> */}
    </>
  );
};

export default ListPage;
