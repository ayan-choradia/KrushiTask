import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/carts';
import { addToWishlist, removeFromWishlist } from '../features/wishlistS';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './ProductList.css';

const products = [
  { id: 1, name: 'Product 1', price: 10, image: '/images/product1.jpg' },
  { id: 2, name: 'Product 2', price: 20, image: '/images/product1.jpg' },
  { id: 3, name: 'Product 3', price: 30, image: '/images/product1.jpg' },
  { id: 4, name: 'Product 4', price: 40, image: '/images/product1.jpg' },
  { id: 5, name: 'Product 5', price: 50, image: '/images/product1.jpg' },
  { id: 6, name: 'Product 6', price: 60, image: '/images/product1.jpg' },
  { id: 7, name: 'Product 7', price: 70, image: '/images/product1.jpg' },
  { id: 8, name: 'Product 8', price: 80, image: '/images/product1.jpg' },
  // Add more products as needed
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.products);
  const wishlist = useSelector(state => state.wishlist.products);
  const [isCartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleWishlistToggle = (product) => {
    const isWishlisted = wishlist.some(item => item.id === product.id);
    dispatch(isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product));
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <h1>My Store</h1>
        <div className="navbar-icons">
          <FaHeart className="navbar-icon" onClick={toggleCart} />
          <FaShoppingCart className="navbar-icon" onClick={toggleCart} />
        </div>
      </nav>
      <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
        <h2>Cart</h2>
        {cart.length > 0 ? (
          cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items in cart</p>
        )}
        <h2>Wishlist</h2>
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items in wishlist</p>
        )}
      </div>
      <div className="product-list">
        <h2>Products</h2>
        <div className="product-list-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <button
                className={`wishlist-button ${wishlist.some(item => item.id === product.id) ? 'wishlisted' : ''}`}
                onClick={() => handleWishlistToggle(product)}
              >
                <FaHeart className="heart-icon" />
              </button>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
