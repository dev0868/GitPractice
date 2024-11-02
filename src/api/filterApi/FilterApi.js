import axios from "axios";

const defUrl =
  "https://2rltmjilx9.execute-api.ap-south-1.amazonaws.com/DataTransaction/Filters?FilterName=FilterPage";
const FilterApi = async (url = defUrl) => {
  try {
    const res = await axios.get(url);
    return [res.data, null];
  } catch (error) {
    return [null, error];
  }
};

export default FilterApi;
