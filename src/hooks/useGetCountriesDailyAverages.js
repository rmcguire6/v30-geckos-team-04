import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetCountriesDailyAverages = () => {
  const [countries, setCountries] = useState({});
  useEffect(() => {
    const fetchCountriesAverages = async () => {
      const api = `https://docs.openaq.org/v2/averages?date_from=2021-06-11T00%3A00%3A00%2B00%3A00&date_to=2021-06-11T19%3A04%3A00%2B00%3A00&parameter=pm25&limit=100&page=1&offset=0&sort=desc&spatial=country&temporal=day&group=false`;
      try {
        const response = await axios.get(api);
        setCountries(response.data.results);
      } catch (error) {
        console.log('Error is : ', error);
      }
    };
    fetchCountriesAverages();
  }, []);
  return [{ countries }];
};
export default useGetCountriesDailyAverages;
