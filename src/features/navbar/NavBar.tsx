import React from 'react';
import './styles/navbar.scss';

import { NavLink } from 'react-router-dom';

const NavBar = (): JSX.Element => {
  return (
    <>
      <ul className="nav__container">
        <li className="nav__item">
          <NavLink className="nav__link" to="/cars">
            cars
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
