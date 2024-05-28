import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    products: []
  },
  reducers: {
    addToWishlist: (state, action) => {
      if (!state.products.find(product => product.id === action.payload.id)) {
        state.products.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    }
  }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
