import {configureStore} from '@reduxjs/toolkit';
import PostReducer from './postSlice';
import WishSlice from './WishSlice';
export const store = configureStore({
  reducer: {
    post: PostReducer,
    wish: WishSlice,
  },
});
