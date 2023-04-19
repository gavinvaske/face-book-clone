import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import popupReducer from '../features/popup/popupSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    popup: popupReducer
  }
});
