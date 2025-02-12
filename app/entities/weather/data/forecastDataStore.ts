import { create } from 'zustand';
import axios, { AxiosResponse } from 'axios';
import { ForecastData } from '../types';
import getForecastUrl from './utils/getForecastUrl';

interface WeatherApiResponse {
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

export interface ForecastDataStore {
  cityId: number | null;
  forecastData: ForecastData | null;
  error: string | null;
  loading: boolean;
  setCityId: (cityId: number) => void;
  fetchForecast: (cityId: number) => Promise<void>;
}

const initialState: ForecastDataStore = {
  cityId: null,
  forecastData: null,
  error: null,
  loading: false,
  setCityId: () => {},
  fetchForecast: async () => {},
};

const forecastDataStore = create<ForecastDataStore>((set) => ({
  ...initialState,
  setCityId: (cityId) => set({ cityId }),
  fetchForecast: async (cityId) => {
    set({ loading: true, error: null });
    try {
      const url = getForecastUrl(cityId);
      const response: AxiosResponse<WeatherApiResponse> = await axios.get(url);
      set({
        forecastData: {
          city: { id: response.data.city.id, name: response.data.city.name },
          list: response.data.list.map((item) => ({
            dt: item.dt,
            temp: item.main.temp,
            feelsLike: item.main.feels_like,
            humidity: item.main.humidity,
            press: item.main.pressure,
            wind: item.wind.speed,
            clouds: item.clouds.all,
            visibility: item.visibility,
            icon: item.weather[0].icon,
            description: item.weather[0].description,
          })),
        },
        loading: false,
        error: null,
      });
    } catch (error) {
      set({ error: 'Failed to fetch weather data', loading: false });
    }
  },
}));

export default forecastDataStore;
