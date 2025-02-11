export type WeatherData = {
  city: {
    id: number;
    name: string;
  };
  dt: number;
  description: string;
  temp: string | number;
  feelsLike: string | number;
  humidity: number;
  press: number;
  wind: number;
  clouds: number;
  visibility: number;
  icon: string;
};

export type ForecastData = {
  city: {
    id: number;
    name: string;
  };
  list: Omit<WeatherData, 'city'>[];
};

export type GroupedForecast = {
  today: ForecastData['list'];
  tomorrow: ForecastData['list'];
  dayAfterTomorrow: ForecastData['list'];
};
