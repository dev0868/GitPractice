import axios from "axios";

export const fetchAllDestinations = async () => {
  try {
    const res = await axios.get(
      "https://2rltmjilx9.execute-api.ap-south-1.amazonaws.com/DataTransaction/GetAllDestinationList"
    );
    return [null, res.data];
  } catch (error) {
    console.log(error);
    return [error, null];
  }
};
