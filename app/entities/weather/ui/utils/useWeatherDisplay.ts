import { useMemo } from "react";
import { ForecastData, WeatherData } from "../../types";

export const useWeatherDisplay = (
  data: WeatherData | ForecastData["list"][0]
) => {
  const weatherDisplay: { id: number; label: string; value: string }[] =
    useMemo(
      () => [
        { id: 1, label: "Description", value: data.description },
        { id: 2, label: "Temperature", value: data.temp + "°C" },
        { id: 3, label: "Feels like", value: data.feelsLike + "°C" },
        { id: 4, label: "Humidity", value: data.humidity + "%" },
        { id: 5, label: "Pressure", value: data.press + "hPa" },
      ],
      [data]
    );

  return weatherDisplay;
};
