import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/carts';
import wishlistReducer from './features/wishlistS';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
