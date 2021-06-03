import React, { useState, useEffect, memo } from 'react';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import styles from './WorldMap.module.css';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const WorldMap = ({ setTooltipContent }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //Handle resize
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME } = geo.properties;
                  setTooltipContent(` ${NAME} : Pop-up box content`);
                }}
                onMouseLeave={() => {
                  setTooltipContent('');
                }}
                style={{
                  default: {
                    fill: '#D6D6DA',
                    outline: 'none',
                  },
                  hover: {
                    fill: '#F53',
                    outline: 'none',
                  },
                  pressed: {
                    fill: '#E42',
                    outline: 'none',
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default memo(WorldMap);
