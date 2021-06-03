import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import styles from './Home.module.css';
import SearchBar from '../search/SearchBar';
import WorldMap from '../world-map/WorldMap';
import Footer from '../common/components/footer/Footer';

const Home = () => {
  const [content, setContent] = useState('');

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
