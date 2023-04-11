import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './message/message';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default store;
