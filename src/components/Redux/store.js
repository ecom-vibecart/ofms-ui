import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Adjust the path as needed
import offerReducer from './offerSlice'; // Adjust the path as needed
import updateOfferReducer from './updateOfferSlice';
import deleteOfferReducer from './deleteOfferSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    offers: offerReducer,
    updateOffers: updateOfferReducer,
    deleteOffers: deleteOfferReducer,
  },
});

export default store;
