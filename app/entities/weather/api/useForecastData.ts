import { create } from "zustand";
import axios from "axios";
import { ForecastData } from "../types";
import getForecastUrl from "./utils/getForecastUrl";

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

export const useForecastDataStore = create<ForecastDataStore>((set) => ({
  ...initialState,
  setCityId: (cityId) => set({ cityId }),
  fetchForecast: async (cityId) => {
    set({ loading: true, error: null });
    try {
      const url = getForecastUrl(cityId);
      const response = await axios.get(url);
      set({
        forecastData: {
          city: { id: response.data.city.id, name: response.data.city.name },
          list: response.data.list.map((item: any) => ({
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
      set({ error: "Failed to fetch weather data", loading: false });
    }
  },
}));
