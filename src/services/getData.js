import axios from "axios";

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getData = async ({ pathURL }) => {
  try {
    const path = `${pathURL}`,
      query = "",
      endpointURL = `${REACT_APP_API_BASE_URL}${path}`,
      res = await axios.get(endpointURL);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error("Error getting data: ", error);
  }
};
