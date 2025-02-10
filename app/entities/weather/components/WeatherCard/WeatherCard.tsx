"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { Tooltip } from "@radix-ui/themes";
import { CardWrapper, CardContent, CardInfo } from "./WeatherCard.style";
import { WeatherData } from "@/app/entities/weather/types";
import getIconUrl from "@/app/entities/weather/api/utils/getIconUrl";
import { useRouter } from "next/navigation";
import { CardHeader } from "..";
import { useWeatherDisplay } from "../utils/useWeatherDisplay";

interface WeatherCardProps {
  weatherData: WeatherData;
}
const WeatherCard = ({ weatherData }: WeatherCardProps) => {
  const router = useRouter();

  const iconUrl = useMemo(
    () => getIconUrl(weatherData.icon),
    [weatherData.icon]
  );

  const weatherDisplay = useWeatherDisplay(weatherData);

  // Gasselterboerveenschemond
  return (
    <Tooltip content="Click to get forecast">
      <CardWrapper
        onClick={() => router.push(`/forecast/${weatherData.city.id}`)}
      >
        <CardHeader city={weatherData.city} />
        <CardContent>
          <Image
            loader={() => iconUrl}
            src={iconUrl}
            alt="weather icon"
            width={100}
            height={100}
          />
          <CardInfo>
            {weatherDisplay.map((item) => (
              <p key={item.id}>
                {item.label}: {item.value}
              </p>
            ))}
          </CardInfo>
        </CardContent>
      </CardWrapper>
    </Tooltip>
  );
};

export default WeatherCard;
