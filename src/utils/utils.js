export const calculateAirQuality = (pollutant) => {
  let quality = "";
  if (0 <= pollutant <= 50) {
    quality = "Good";
  } else if (51 <= pollutant <= 100) {
    quality = "Moderate";
  } else if (101 <= pollutant <= 150) {
    quality = "Unhealthy for Sensitive Groups";
  } else if (151 <= pollutant <= 200) {
    quality = "Unhealthy";
  } else if (201 <= pollutant <= 300) {
    quality = "Very Unhealthy";
  } else if (301 <= pollutant) {
    quality = "Hazardous";
  } else {
    quality = "Unknown";
  }
  return quality;
};
