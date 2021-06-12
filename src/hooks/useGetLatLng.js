import { useState, useEffect } from "react";
import axios from "axios";

const useGetLatLng = (location) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchLatAndLong = async () => {
      try {
        const result = await axios.get(
          `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST}&location=${location}`
        );
        console.log(
          "results ",
          result.data.results[0].locations[0].displayLatLng
        );
        setData(result.data.results[0].location[0].displayLatLng);
        console.log("data", data);
      } catch (error) {
        console.error(error);
      }
    };
    if (location !== "") {
      fetchLatAndLong(location);
    }
  }, [location]);

  return [data];
};
export default useGetLatLng;
