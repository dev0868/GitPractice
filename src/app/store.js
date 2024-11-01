import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import destinationSliceReducer from "../features/destinations/destinationSlice";
import filterSidebarReducer from "../features/sideFilter/sideFilterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    destination: destinationSliceReducer,
    filterSidebar: filterSidebarReducer,
  },
});
