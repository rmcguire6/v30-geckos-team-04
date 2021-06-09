import React, { useEffect, useState } from "react";
import styles from "../card/Card.module.css";
import { calculateAirQuality } from "../../../../utils/utils";

const Card = ({ cityName, countryName, parameter, value }) => {
  const [airQuality, setAirQuality] = useState(null);
  console.log(`countryName is ${countryName}`);
  useEffect(() => {
    setAirQuality(calculateAirQuality(value));
  }, [value]);
  return (
    <div className={styles.card}>
      <h3>{`${cityName}, ${countryName}`}</h3>
      <div className={styles.item}>
        <p className={styles.label}>{parameter}</p>
        <p>{value}</p>
      </div>
      <div className={styles.item}>
        <p className={styles.label}>Air Quality: </p>
        <p>{airQuality}</p>
      </div>
    </div>
  );
};
export default Card;
