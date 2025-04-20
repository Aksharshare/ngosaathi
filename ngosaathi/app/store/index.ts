import { configureStore } from '@reduxjs/toolkit';
import activitiesReducer from './slices/activitiesSlice';
import beneficiariesReducer from './slices/beneficiariesSlice';

export const store = configureStore({
  reducer: {
    activities: activitiesReducer,
    beneficiaries: beneficiariesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 