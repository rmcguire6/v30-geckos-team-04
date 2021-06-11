import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styles from "./Region.module.css";
import SearchBar from "../search/SearchBar";
import CurrentContext from "../../context/Current";
import Card from "../common/components/card/Card";

const Region = () => {
  const { currentLocation } = useContext(CurrentContext);
  const [data, setData] = useState([]);
  const url = `https://docs.openaq.org/v2/latest?limit=100&page=1&offset=0&sort=desc&coordinates=33.7864%2C-111.9195&radius=100&order_by=lastUpdated&dumpRaw=false`;

  useEffect(() => {
    const fetchMeasurements = async () => {
      try {
        const result = await axios.get(url);
        setData(result.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMeasurements();
    console.log("fetch happened");
  }, [url]);
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
