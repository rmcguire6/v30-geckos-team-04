import React, { useContext } from "react";
import styles from "./Region.module.css";
import SearchBar from "../search/SearchBar";
import CurrentContext from "../../context/Current";
const Region = () => {
  const { currentLocation } = useContext(CurrentContext);
  console.log(`currentLocation is ${currentLocation}`);
  return (
    <>
      <div className={styles.region}>
        <h1>Region</h1>
        <SearchBar />
      </div>
    </>
  );
};

export default Region;
