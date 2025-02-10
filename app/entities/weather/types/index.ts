export type WeatherData = {
  city: string;
  cityId: number;
  description: string;
  temp: string | number;
  feelsLike: string | number;
  humidity: number;
  press: number;
  wind: number;
  clouds: number;
  visibility: number;
  sunrise: number;
  sunset: number;
  icon: string;
};
