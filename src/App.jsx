import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ItemView from './pages/ItemView';
import ShoppingList from '../src/components/shoppingList';

const App = () => {
  const [cartQuantities, setCartQuantities] = useState({});

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={<ShoppingCart cartQuantities={cartQuantities} />}
        />
        <Route
          path="/ItemView/:id"
          element={
            <ItemView
              cartQuantities={cartQuantities}
              setCartQuantities={setCartQuantities}
            />
          }
        />
        <Route path="/products" element={<ShoppingList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
