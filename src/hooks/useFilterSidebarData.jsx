/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterApi from "../api/filterApi/FilterApi";
import {
  setDestinationName,
  setFilterData,
} from "../features/sideFilter/sideFilterSlice";
import { fetchAllDestinations } from "../api/destinationApi/destinationApi";
import { setAllDestinations } from "../features/destinations/destinationSlice";

export const useFilterSidebarData = () => {
  const dispatch = useDispatch();
  const Package_Type = useSelector((state) => state.filterSidebar.packageType);
  const Destination = useSelector((state) => state.filterSidebar.destination);
  const Activities = useSelector((state) => state.filterSidebar.activities);
  const Days = useSelector((state) => state.filterSidebar.days);

  useEffect(() => {
    const fetchData = async () => {
      const [filterResponse, destinationResponse] = await Promise.all([
        FilterApi(),
        fetchAllDestinations(),
      ]);

      // Destructure results from each API response
      const [filterData, filterError] = filterResponse;
      const [destinationError, destinationData] = destinationResponse;

      // Dispatch data only after both API responses have been received
      if (filterData) {
        dispatch(setFilterData(filterData));
      }
      if (destinationData) {
        dispatch(setAllDestinations(destinationData));
        dispatch(setDestinationName(destinationData));
      }
    };

    fetchData();
  }, [dispatch]);

  return { Package_Type, Destination, Activities, Days };
};
