import { useState, useEffect } from "react";
import axios from "axios";

const useGetCountriesAverages = () => {
  const [countries, setCountries] = useState({});
  useEffect(() => {
    const fetchCountriesAverages = async () => {
      const api = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/averages?date_from=2000-01-01T00%3A00%3A00%2B00%3A00&date_to=2021-06-10T16%3A41%3A00%2B00%3A00&limit=100000&page=1&offset=0&sort=desc&spatial=country&temporal=year&group=false`;
      try {
        const response = await axios.get(api);
        setCountries(response.data.results);
      } catch (error) {
        console.log("Error is : ", error);
      }
    };
    fetchCountriesAverages();
  }, []);
  return [{ countries }];
};
export default useGetCountriesAverages;
