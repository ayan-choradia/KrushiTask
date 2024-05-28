import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../features/wishlistS';
import './Wishlist.css';

function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.products);

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlist.map(item => (
          <div className="wishlist-item" key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button className="remove-from-wishlist-button" onClick={() => handleRemoveFromWishlist(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;
