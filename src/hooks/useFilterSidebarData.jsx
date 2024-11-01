/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
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
    const fetchFilterApi = async () => {
      const [data, err] = await FilterApi();
      if (data) {
        dispatch(setFilterData(data));
      }
    };
    const fetDestinationAPI = async () => {
      const [error, datas] = await fetchAllDestinations();
      if (datas) {
        dispatch(setAllDestinations(datas));
        dispatch(setDestinationName(datas));
      }
    };
    fetDestinationAPI();
    fetchFilterApi();
  }, [dispatch]);

  return { Package_Type, Destination, Activities, Days };
};
