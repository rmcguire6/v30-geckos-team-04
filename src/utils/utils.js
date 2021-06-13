export const calculateAirQuality = pollutant => {
  let quality = '';
  if (0 <= pollutant && pollutant <= 12.0) {
    quality = 'Good';
  } else if (12.1 <= pollutant && pollutant <= 35.4) {
    quality = 'Moderate';
  } else if (35.5 <= pollutant && pollutant <= 55.4) {
    quality = 'Unhealthy for Sensitive Groups';
  } else if (55.5 <= pollutant && pollutant <= 150.4) {
    quality = 'Unhealthy';
  } else if (150.5 <= pollutant && pollutant <= 250.4) {
    quality = 'Very Unhealthy';
  } else if (250.5 <= pollutant) {
    quality = 'Hazardous';
  } else {
    quality = 'No Data';
  }
  return quality;
};
