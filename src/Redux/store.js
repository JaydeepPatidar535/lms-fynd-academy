// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers as needed
  },
  devTools: true,
});

export default store;
