import React from "react";
import Card from "../card/Card";

const SearchResults = ({ location, country, measurements }) => {
  return (
    <>
      <h2>Search Results-{location}</h2>
      <Card location={location} country={country} measurements={measurements} />
    </>
  );
};

export default SearchResults;
