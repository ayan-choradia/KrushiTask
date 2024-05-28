import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <ProductList />
      <Cart />
      <Wishlist />
    </div>
  );
}

export default App;
