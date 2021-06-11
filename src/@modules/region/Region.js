import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styles from "./Region.module.css";
import SearchBar from "../search/SearchBar";
import CurrentContext from "../../context/Current";
import Card from "../common/components/card/Card";

const Region = () => {
  const { currentLocation } = useContext(CurrentContext);
  const [data, setData] = useState([]);
  const [latAndLong] = useState([40.6673, -111.7996]);

  useEffect(() => {
    const fetchMeasurements = async () => {
      try {
        const result = await axios.get(
          `https://docs.openaq.org/v2/latest?limit=100&page=1&offset=0&sort=desc&coordinates=${latAndLong[0]}%2C${latAndLong[1]}&radius=100&order_by=lastUpdated&dumpRaw=false`
        );
        setData(result.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMeasurements();
    console.log("fetch happened");
  }, [latAndLong]);
  console.log("data", data);
  console.log("current Location ", currentLocation);

  return (
    <div className={styles.region}>
      <h1 className={styles.title}>Region</h1>
      <SearchBar />
      {data.length > 0 ? (
        <>
          <h2 className={styles.title}>Search Results-{data[0].location}</h2>
          <Card
            location={data[0].location}
            country={data[0].country}
            measurements={data[0].measurements}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Region;
