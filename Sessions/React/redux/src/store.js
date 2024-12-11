import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/CounterSlice';
import formReducer from './features/form/FormSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
  }
});
