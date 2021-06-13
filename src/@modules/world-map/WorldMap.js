import React, { useState, useEffect, memo } from 'react';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import styles from './WorldMap.module.css';
import { calculateAirQuality } from '../../utils/utils';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const geoStyle = {
  default: {
    fill: '#D6D6DA',
    outline: 'none',
  },
  hover: {
    fill: '#F53',
    transition: 'all 250ms',
    outline: 'none',
  },
  pressed: {
    // fill: '#E42',
    outline: 'none',
  },
};

// World Map Component
const WorldMap = ({ setTooltipContent, countries }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //Handle resize
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onMouseEnter = (geo, current = { average: 'NA' }) => {
    const { NAME } = geo.properties;
    return () => {
      setTooltipContent(` ${NAME} : ${calculateAirQuality(current.average)}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent('');
  };

  return (
    <ComposableMap
      projectionConfig={{
        scale: windowWidth > 1024 ? 40 : 120,
        center: [0, 8],
      }}
      width={200}
      height={100}
      data-tip=""
      className={styles.worldMap}
    >
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const current = countries.find(
                ({ name }) => name === geo.properties.ISO_A2
              );
              // console.log(current);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                  style={geoStyle}
                />
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default memo(WorldMap);
