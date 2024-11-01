import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  packageType: [],
  destination: [],
  activities: [],
  days: [],
};

export const sideFilterSlice = createSlice({
  name: "FilterSidebar",
  initialState,
  reducers: {
    setDestinationName: (state, action) => {
      const filterDestination = action.payload.map(
        (ele) => ele.DestinationName
      );
      state.destination = filterDestination;
    },
    setFilterData: (state, action) => {
      state.activities = action.payload[0].Activities;

      state.packageType = action.payload[0].Categories.map(
        (ele) => ele.CategoryName
      );
      state.days = [
        ...new Set(action.payload[0].Days.map((ele) => Number(ele))),
      ].sort((a, b) => a - b);
    },
  },
});

export const { setDestinationName, setFilterData } = sideFilterSlice.actions;
export default sideFilterSlice.reducer;
