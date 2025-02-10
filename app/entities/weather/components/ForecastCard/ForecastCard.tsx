import React from "react";
import {
  ForecastCardWrapper,
  ForecastCardHeader,
  ForecastCardContent,
} from "./ForecastCard.style";
import { ForecastData } from "@/app/entities/weather/types";
import getTime from "../utils/getTime";
import { useWeatherDisplay } from "../utils/useWeatherDisplay";

interface ForecastCardProps {
  forecastItem: ForecastData["list"][0];
}

const ForecastCard = ({ forecastItem }: ForecastCardProps) => {
  const forecastDisplay = useWeatherDisplay(forecastItem);
  return (
    <ForecastCardWrapper>
      <ForecastCardHeader>{getTime(forecastItem.dt)}</ForecastCardHeader>
      <ForecastCardContent>
        {forecastDisplay.map((item) => (
          <p key={item.id}>
            {item.label}: {item.value}
          </p>
        ))}
      </ForecastCardContent>
    </ForecastCardWrapper>
  );
};

export default ForecastCard;
