import axios from "axios";

const FilterApi = async () => {
  try {
    const res = await axios.get(
      "https://2rltmjilx9.execute-api.ap-south-1.amazonaws.com/DataTransaction/Filters?FilterName=FilterPage"
    );
    return [res.data, null];
  } catch (error) {
    return [null, error];
  }
};

export default FilterApi;
