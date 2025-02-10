"use client";
import React, { useEffect, useMemo } from "react";
import { useForecastDataStore } from "@/app/entities/weather/api/useForecastData";
import {
  Container,
  ForecastSection,
  ForecastSectionTitle,
} from "./Forecast.style";
import { Loading, NotFound } from "@/app/shared/ui";
import { CardHeader, ForecastCard } from "@/app/entities/weather/components";
import groupWeatherByDays from "@/app/entities/weather/components/utils/groupForecastByDays";
import { ForecastData } from "@/app/entities/weather/types";

interface ForecastProps {
  cityId: number;
}

const FORECAST_SECTIONS = [
  { key: "today" as const, title: "Today" },
  { key: "tomorrow" as const, title: "Tomorrow" },
  { key: "dayAfterTomorrow" as const, title: "Day after tomorrow" },
] as const;

const Forecast = ({ cityId }: ForecastProps) => {
  const { forecastData, loading, error, fetchForecast } =
    useForecastDataStore();

  useEffect(() => {
    fetchForecast(Number(cityId));
  }, [cityId, fetchForecast]);

  if (!cityId) return <NotFound />;

  const groupedForecast = useMemo(
    () => groupWeatherByDays(forecastData?.list ?? []),
    [forecastData]
  );

  const renderForecast = useMemo(
    () => (
      <>
        {FORECAST_SECTIONS.map(({ key, title }) => (
          <ForecastSection key={key}>
            <ForecastSectionTitle>{title}</ForecastSectionTitle>
            {groupedForecast[key].map(
              (item: ForecastData["list"][0], index: number) => (
                <ForecastCard key={item.dt + index} forecastItem={item} />
              )
            )}
          </ForecastSection>
        ))}
      </>
    ),
    [groupedForecast]
  );

  return (
    <Container>
      {loading ? (
        <Loading height="calc(100vh - 10rem)" />
      ) : error ? (
        <NotFound text={error} />
      ) : (
        forecastData && (
          <>
            <CardHeader city={forecastData.city} />
            {renderForecast}
          </>
        )
      )}
    </Container>
  );
};

export default Forecast;
