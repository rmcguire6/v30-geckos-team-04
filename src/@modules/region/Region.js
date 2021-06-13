import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styles from "./Region.module.css";
import SearchBar from "../search/SearchBar";
import CurrentContext from "../../context/Current";

const Region = () => {
  const { currentLocation } = useContext(CurrentContext);
  const [data, setData] = useState([]);
  const [latAndLng, setLatAndLng] = useState();

  useEffect(() => {
    const fetchLatAndLong = async () => {
      try {
        const result = await axios.get(
          `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST}&location=${currentLocation}`
        );
        setData(result.data.results[0].locations[0].displayLatLng);
      } catch (error) {
        console.error(error);
      }
      return data;
    };
    if (currentLocation.length > 0) {
      fetchLatAndLong();
    }
  }, [currentLocation]);
  console.log("loc data", currentLocation, data);
  useEffect(() => {
    setLatAndLng([data.lat, data.lng]);
    console.log("latLng changed", latAndLng);
  }, [data.lat, data.lng]);

  return (
    <div className={styles.region}>
      <h1 className={styles.title}>Region</h1>
      <SearchBar />
      {currentLocation.length > 0 ? (
        <>
          <div className={styles.card}>
            <ul>
              <li className={styles.item}>
                <p className={styles.label}>
                  Location: {currentLocation.toUpperCase()}
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.label}>Lat:</p>
                <p>{data?.lat}</p>
              </li>
              <li className={styles.item}>
                <p className={styles.label}>Long:</p>
                <p>{data?.lng}</p>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className={styles.card}>
          <p className={styles.label}>No Location Selected</p>
        </div>
      )}
    </div>
  );
};
export default Region;
