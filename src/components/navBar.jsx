import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const isCartPage =
    location.pathname === '/cart' || location.pathname.startsWith('/ItemView/');

  return (
    <div>
      <div
        className={`absolute top-0 left-0 w-full z-50 ${
          isCartPage ? 'text-black' : 'text-white'
        }`}
      >
        <ul className="flex justify-start pr-20 p-4">
          <li className="p-4 hover:text-blue-300">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'font-bold' : '')}
            >
              Home
            </NavLink>
          </li>
          <li className="p-4 hover:text-blue-300">
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? 'font-bold' : '')}
            >
              Shopping Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
