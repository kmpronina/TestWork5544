"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { Tooltip } from "@radix-ui/themes";
import { CardWrapper, CardContent, CardInfo } from "./WeatherCard.style";
import { WeatherData } from "@/app/entities/weather/types";
import getIconUrl from "@/app/entities/weather/data/utils/getIconUrl";
import { useRouter } from "next/navigation";
import { CardHeader } from "..";
import { useWeatherDisplay } from "../utils/useWeatherDisplay";
import { Loading } from "@/app/shared/ui";
import { NotFound } from "@/app/shared/ui";

interface WeatherCardProps {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
}
const WeatherCard = ({ weatherData, loading, error }: WeatherCardProps) => {
  const router = useRouter();

  const WeatherInfo = () =>
    useMemo(() => {
      if (!weatherData) return null;
      const iconUrl = useMemo(
        () => getIconUrl(weatherData.icon),
        [weatherData.icon]
      );

      const weatherDisplay = useWeatherDisplay(weatherData);
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
    }, [weatherData]);

  // Gasselterboerveenschemond
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {error && <NotFound text={error} />}
          {weatherData && <WeatherInfo />}
        </>
      )}
    </>
  );
};

export default WeatherCard;
