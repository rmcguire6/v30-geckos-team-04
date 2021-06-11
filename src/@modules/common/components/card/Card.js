import React, { useEffect, useState } from "react";
import styles from "../card/Card.module.css";
import { calculateAirQuality } from "../../../../utils/utils";
const Card = ({ location, country, measurements }) => {
  const [airQuality, setAirQuality] = useState(null);
  const currentPM = measurements.find(
    (element) => element.parameter === "pm25"
  );
  useEffect(() => {
    setAirQuality(calculateAirQuality(currentPM.value));
  }, []);
  return (
    <div className={styles.card}>
      <h3>{`${location} in ${country}`}</h3>
      <ul>
        {measurements.map((item) => {
          return (
            <li key={item.parameter} className={styles.item}>
              <p className={styles.label}>{item.parameter}</p>
              <p>{item.value}</p>
            </li>
          );
        })}
        <li className={styles.item}>
          <p className={styles.label}>Air Quality: </p>
          <p>{airQuality}</p>
        </li>
      </ul>
    </div>
  );
};
export default Card;
