import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './serviceSlice';
import { api } from './apiSlice';

export const store = configureStore({
  reducer: {
    service: serviceReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 