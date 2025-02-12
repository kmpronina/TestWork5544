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

export interface WeatherApiResponse {
  cod: string;
  message: number;
  cnt: number;
  list: Array<{
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  }>;
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}
