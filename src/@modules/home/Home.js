import React, { useContext, useState } from "react";
import ReactTooltip from "react-tooltip";
import styles from "./Home.module.css";
import SearchBar from "../search/SearchBar";
import WorldMap from "../world-map/WorldMap";
import Footer from "../common/components/footer/Footer";
import CurrentContext from "../../context/Current";
const Home = () => {
  const { countries } = useContext(CurrentContext);
  const [content, setContent] = useState("");
  console.log("countries", countries);
  return (
    <div className={styles.home}>
      <SearchBar />
      <WorldMap setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
      <Footer />
    </div>
  );
};

export default Home;
