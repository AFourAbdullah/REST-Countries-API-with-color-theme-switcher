import axios from "axios";
export const BASE_URL = "https://restcountries.com/v3.1";
export const fetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  return data;
};
