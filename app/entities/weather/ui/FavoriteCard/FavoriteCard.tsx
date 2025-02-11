import React from "react";
import useWeather from "@/app/entities/weather/data/useWeather";
import { WeatherCard } from "..";

interface FavoriteCardProps {
  cityId: number;
}

const FavoriteCard = ({ cityId }: FavoriteCardProps) => {
  const { data, loading, error } = useWeather(cityId) || {
    data: null,
    loading: false,
    error: null,
  };

  return <WeatherCard weatherData={data} loading={loading} error={error} />;
};

export default FavoriteCard;
