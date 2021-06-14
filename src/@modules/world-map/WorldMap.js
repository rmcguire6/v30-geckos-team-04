import React, { useState, useEffect, memo } from 'react';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import { calculateAirQuality } from '../../utils/utils';
import styles from './WorldMap.module.css';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

// from green to red
const COLOR_RANGE = [
  '#A5B9A0',
  '#B2C996',
  '#D2DB8C',
  '#EDD482',
  '#FFB177',
  '#FF8A87',
];
const DEFAULT_COLOR = '#A8A8A8';

const geoStyle = {
  default: {
    outline: 'none',
  },
  hover: {
    fill: '#ccc',
    transition: 'all 250ms',
    outline: 'none',
  },
  pressed: {
    outline: 'none',
  },
};

// World Map Component
const WorldMap = ({ setTooltipContent, countries }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const colorScale = value => {
    switch (calculateAirQuality(value)) {
      case 'Good':
        return COLOR_RANGE[0];
      case 'Moderate':
        return COLOR_RANGE[1];
      case 'Unhealthy for Sensitive Groups':
        return COLOR_RANGE[2];
      case 'Unhealthy':
        return COLOR_RANGE[3];
      case 'Very Unhealthy':
        return COLOR_RANGE[4];
      case 'Hazardous':
        return COLOR_RANGE[5];
      default:
        return DEFAULT_COLOR;
    }
  };

  const onMouseEnter = (geo, current = { average: 'NA' }) => {
    const { NAME } = geo.properties;
    return () => {
      setTooltipContent(
        ` ${NAME} : ${calculateAirQuality(current.average)} (${
          current.average
        })`
      );
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
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.average) : DEFAULT_COLOR}
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
