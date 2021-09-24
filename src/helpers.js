export const KelvinToCentigrade = (temp) => {
  const KELVIN = 273.15;
  return parseFloat(temp - KELVIN, 10).toFixed(2);
};
export const getURL = ({ city, country }) => {
  const APP_ID = process.env.REACT_APP_WEATHER_API_KEY;
  return `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APP_ID}`;
};
