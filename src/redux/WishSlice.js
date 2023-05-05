import {createSlice} from '@reduxjs/toolkit';

export const WishSlice = createSlice({
  name: 'post',
  initialState: {
    data: [],
  },
  reducers: {
    addToWishlist(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const {addPost, getItemsByCategory, addToWishlist} = WishSlice.actions;
export default WishSlice.reducer;
