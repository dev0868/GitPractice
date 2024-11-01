import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destinations: [],
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {
    setAllDestinations: () => {},
  },
});

export const { setAllDestinations } = destinationSlice.actions;

export default destinationSlice.reducer;
