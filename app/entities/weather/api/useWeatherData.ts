import { create } from 'zustand';
import axios from 'axios';
import { WeatherData } from '../types';
import getUrl from './utils/getUrl';

export interface WeatherStore {
  city: string;
  weatherData: WeatherData | null;
  error: string | null;
  loading: boolean;
  setCity: (city: string) => void;
  fetchWeather: (city: string) => Promise<void>;
  favoriteCities: number[];
  addFavoriteCity: (city: number) => void;
  removeFavoriteCity: (city: number) => void;
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  city: '',
  weatherData: null,
  error: null,
  loading: false,
  setCity: (city) => set({ city }),
  favoriteCities: [],
  addFavoriteCity: (city) => set((state) => ({ favoriteCities: [...state.favoriteCities, city] })),
  removeFavoriteCity: (city) => set((state) => ({ favoriteCities: state.favoriteCities.filter((c) => c !== city) })),
  fetchWeather: async (city) => {
    if (!city) {
      set({ loading: false, error: null, weatherData: null });
      return;
    }

    set({ loading: true, error: null });

    try {
      const url = getUrl(city);
      const response = await axios.get(url);

      set({
        weatherData: {
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          feelsLike: response.data.main.feels_like,
          city: response.data.name,
          cityId: response.data.id,
          humidity: response.data.main.humidity,
          press: response.data.main.pressure,
          wind: response.data.wind.speed,
          clouds: response.data.clouds.all,
          visibility: response.data.visibility,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          icon: response.data.weather[0].icon,
        },
        loading: false,
        error: null,
      });
    } catch (err) {
      set({
        weatherData: null,
        loading: false,
        error: 'We could not find the city you are looking for',
      });
    }
  },
}));

export default useWeatherStore;
