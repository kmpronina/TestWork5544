import { City } from '../../types';

function getUrl(city: City) {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_APP_APIKEY;
  if (!apiKey) {
    throw new Error('Weather API key is not defined in environment variables');
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?${
    typeof city === 'object' ? `lat=${city.lat}&lon=${city.lon}` : typeof city === 'number' ? `id=${city}` : `q=${city}`
  }&appid=${apiKey}&units=metric`;
  return url;
}

export default getUrl;
