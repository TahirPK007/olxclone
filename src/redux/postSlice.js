import {createSlice} from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    data: [],
  },
  reducers: {
    addPost(state, action) {
      state.data.push(action.payload);
    },
    addToWishlist(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const {addPost, getItemsByCategory, addToWishlist} = postSlice.actions;
export default postSlice.reducer;
