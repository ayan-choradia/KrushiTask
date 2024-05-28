import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCart } from '../features/carts';
import './Cart.css';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.products);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateCart({ id, quantity: parseInt(quantity) }));
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map(item => (
          <div className="cart-item" key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <input 
              type="number" 
              value={item.quantity} 
              onChange={(e) => handleQuantityChange(item.id, e.target.value)} 
              min="1"
            />
            <button className="remove-from-cart-button" onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
