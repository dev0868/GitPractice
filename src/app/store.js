import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import destinationSliceReducer from "../features/destinations/destinationSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    destination: destinationSliceReducer,
  },
});
