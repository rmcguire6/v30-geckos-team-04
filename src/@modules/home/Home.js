import React from 'react-dom';
import SearchBar from '../search/SearchBar';
import WorldMap from '../world-map/WorldMap';

const Home = () => {
  return (
    <div>
      <SearchBar />
      <WorldMap />
    </div>
  );
};

export default Home;
