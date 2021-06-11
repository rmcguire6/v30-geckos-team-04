import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css";
import CurrentContext from "../../context/Current";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const { setCurrentLocation } = useContext(CurrentContext);
  const setLocation = (e) => {
    e.preventDefault();
    setCurrentLocation(searchText);
    setSearchText("");
  };
  return (
    <>
      <form onSubmit={setLocation} className={styles.searchForm}>
        <input
          className={styles.searchBar}
          value={searchText}
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.icon}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
