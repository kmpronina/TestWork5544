function getForecastUrl(cityId: number) {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_APP_APIKEY;
  if (!apiKey) {
    throw new Error("Weather API key is not defined in environment variables");
  }
  const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric&cnt=24`;
  return url;
}

export default getForecastUrl;
