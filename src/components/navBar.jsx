import React from 'react';
import { NavLink } from 'react-router-dom';

const navBar = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-50">
        <ul className="flex justify-end pr-20 p-4 text-rose-300">
          <li className="p-4 hover:text-rose-500">
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li className="p-4 hover:text-rose-500">
            <NavLink to={'/cart'}>Shopping Cart</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navBar;
