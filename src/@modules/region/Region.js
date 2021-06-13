import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styles from "./Region.module.css";
import SearchBar from "../search/SearchBar";
import CurrentContext from "../../context/Current";
import Card from "../../@modules/common/components/card/Card";
const Region = () => {
  const { currentLocation } = useContext(CurrentContext);
  const data = [48.856506, 2.352133];
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState("false")
  // useEffect(() => {
  //   const fetchLatAndLong = async () => {
  //     try {
  //       const result = await axios.get(
  //         `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST}&location=${currentLocation}`
  //       );
  //       setData(result.data.results[0].locations[0].displayLatLng);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     return data;
  //   };
  //   if (currentLocation.length > 0) {
  //     fetchLatAndLong();
  //   }
  // }, [currentLocation]);
  // console.log("loc data", currentLocation, data);

  useEffect(() => {
    const fetchMeasurements = async (currentLocation) => {
      try {
        setLoading("true")
        const result = await axios.get(
          `https://docs.openaq.org/v2/latest?limit=100&page=1&offset=0&sort=desc&coordinates=48.856506%2C2.352133&radius=100&order_by=lastUpdated&dumpRaw=false`
        );
        setResults(result.data.results);
        setLoading("false")
        console.log("results", results);
      } catch (error) {
        setLoading("noResults")
        console.error(error);
      }
    };
    if (currentLocation !== '') {
      fetchMeasurements();
      console.log("fetch happened");
    }
  }, [currentLocation]);
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
      {loading === "true"? (
        <p>Loading ...</p> 
      ) : {loading === "noResults" ? <p className={styles.label}>No Measurements at this Location</p> : 
     
        <Card
          location={results?.location}
          country={results?.country}
          measurements={results?.measurements}
        />}
      }
    </div>
  );
};
export default Region;
