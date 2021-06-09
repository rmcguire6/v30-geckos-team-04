import React, { useContext } from "react";
import styles from "./Region.module.css";
import SearchBar from "../search/SearchBar";
import CurrentContext from "../../context/Current";
import Card from "../common/components/card/Card";

const Region = () => {
  const { currentLocation } = useContext(CurrentContext);
  console.log(`currentLocation is ${currentLocation}`);
  const countryName = "United States";
  const tempApiCall = {
    locationId: 71413,
    location: "Seymour 1",
    parameter: "pm25",
    value: 20,
    date: {
      utc: "2021-06-05T17:04:00+00:00",
      local: "2021-06-05T12:04:00-05:00",
    },
    unit: "µg/m³",
    coordinates: {
      latitude: 44.8367,
      longitude: -91.3621,
    },
    country: "US",
    city: "Cornville",
  };

  return (
    <div className={styles.region}>
      <h1 className={styles.title}>Region</h1>
      <SearchBar />
      <h2 className={styles.title}>
        Search Results-{tempApiCall.city}, {countryName}
      </h2>
      <Card
        cityName={tempApiCall.city}
        countryName={countryName}
        parameter={tempApiCall.parameter.toUpperCase()}
        value={tempApiCall.value}
      />
    </div>
  );
};
export default Region;
