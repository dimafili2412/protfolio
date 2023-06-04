import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import windowReducer from '../features/window/windowSlice';
import addressReducer from '../features/address/addressSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    window: windowReducer,
    address: addressReducer,
  },
});
