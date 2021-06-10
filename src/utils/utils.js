export const calculateAirQuality = pollutant => {
  console.log(pollutant);
  let quality = '';
  if (0 <= pollutant && pollutant <= 50) {
    quality = 'Good';
  } else if (51 <= pollutant && pollutant <= 100) {
    quality = 'Moderate';
  } else if (101 <= pollutant && pollutant <= 150) {
    quality = 'Unhealthy for Sensitive Groups';
  } else if (151 <= pollutant && pollutant <= 200) {
    quality = 'Unhealthy';
  } else if (201 <= pollutant && pollutant <= 300) {
    quality = 'Very Unhealthy';
  } else if (301 <= pollutant) {
    quality = 'Hazardous';
  } else {
    quality = 'Unknown';
  }
  console.log(quality);
  return quality;
};
