import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destinations: [],
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {
    setAllDestinations: (state, action) => {
      state.destinations = action.payload;
    },
  },
});

export const { setAllDestinations } = destinationSlice.actions;

export default destinationSlice.reducer;
