"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { useWeatherStore } from "@/app/entities/weather/api/useWeatherData";
import { Container } from "./WeatherSearch.style";
import { useDebounce } from "@/app/shared/lib/useDebounce";
import { Input, Loading, NotFound } from "@/app/shared/ui";
import { WeatherCard } from "@/app/entities/weather/components";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const debouncedValue = useDebounce(city);
  const { weatherData, error, loading, fetchWeather } = useWeatherStore();

  useEffect(() => {
    if (debouncedValue) {
      fetchWeather(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <Container>
      <Input
        variant="surface"
        placeholder="Search the city"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          {error && <NotFound text={error} />}
          {weatherData && <WeatherCard weatherData={weatherData} />}
        </>
      )}
    </Container>
  );
}
