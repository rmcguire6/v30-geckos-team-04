import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import SearchBar from '../search/SearchBar';
import WorldMap from '../world-map/WorldMap';

const Home = () => {
  const [content, setContent] = useState('');

  return (
    <div>
      <SearchBar />
      <WorldMap setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default Home;
