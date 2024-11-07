import axios from "axios";

export async function fetchAllDestinationData() {
  try {
    let res = await axios.get(
      `https://2rltmjilx9.execute-api.ap-south-1.amazonaws.com/DataTransaction/GetAllDestinationList?DestinationName=All`
    );
    if (res) {
      return [res.data, null];
    }
  } catch (err) {
    console.error("Unexpected error has been occured", err);
    return [null, err];
  }
}
