import { create } from "zustand";
import axios from "axios";
import { WeatherData } from "../types";
import getUrl from "./utils/getUrl";

export interface WeatherStore {
  city: string;
  weatherData: WeatherData | null;
  error: string | null;
  loading: boolean;
  setCity: (city: string) => void;
  favoriteCities: number[];
  addFavoriteCity: (city: number) => void;
  removeFavoriteCity: (city: number) => void;
  fetchWeather: (city: string) => Promise<void>;
}

const initialState: WeatherStore = {
  city: "",
  weatherData: null,
  error: null,
  loading: false,
  favoriteCities: [],
  setCity: () => {},
  addFavoriteCity: () => {},
  removeFavoriteCity: () => {},
  fetchWeather: async () => {},
};

export const useWeatherStore = create<WeatherStore>((set) => ({
  // city: "",
  // weatherData: null,
  // error: null,
  // loading: false,
  ...initialState,
  setCity: (city) => set({ city }),
  favoriteCities: [],
  addFavoriteCity: (city) =>
    set((state) => ({ favoriteCities: [...state.favoriteCities, city] })),
  removeFavoriteCity: (city) =>
    set((state) => ({
      favoriteCities: state.favoriteCities.filter((c) => c !== city),
    })),
  fetchWeather: async (city) => {
    if (!city) {
      set({
        loading: false,
        error: "Please enter a city name",
        weatherData: null,
      });
      return;
    }

    set({ loading: true, error: null });

    try {
      const url = getUrl(city);
      const response = await axios.get(url);

      if (!response.data) {
        throw new Error("No data received from the weather service");
      }

      set({
        weatherData: {
          dt: response.data.dt ?? 0,
          description: response.data.weather?.[0]?.description ?? "",
          temp: response.data.main?.temp ?? 0,
          feelsLike: response.data.main?.feels_like ?? 0,
          city: {
            id: response.data.id ?? 0,
            name: response.data.name ?? city,
          },
          humidity: response.data.main?.humidity ?? 0,
          press: response.data.main?.pressure ?? 0,
          wind: response.data.wind?.speed ?? 0,
          clouds: response.data.clouds?.all ?? 0,
          visibility: response.data.visibility ?? 0,
          icon: response.data.weather?.[0]?.icon ?? "",
        },
        loading: false,
        error: null,
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to fetch weather data. Please try again.";

      set({
        weatherData: null,
        loading: false,
        error: errorMessage,
      });
    }
  },
}));

export default useWeatherStore;
