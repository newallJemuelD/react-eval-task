import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import queryReducer from './querySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    queries: queryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;