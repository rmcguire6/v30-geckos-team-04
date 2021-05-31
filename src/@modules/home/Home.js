import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import styles from './Home.module.css';
import SearchBar from '../search/SearchBar';
import WorldMap from '../world-map/WorldMap';

const Home = () => {
  const [content, setContent] = useState('');

  return (
    <div className={styles.home}>
      <SearchBar />
      <WorldMap setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default Home;
