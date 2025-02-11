'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Tooltip } from '@radix-ui/themes';
import { WeatherData } from '@/app/entities/weather/types';
import getIconUrl from '@/app/entities/weather/data/utils/getIconUrl';
import { useWeatherDisplay } from '../utils/useWeatherDisplay';
import { Loading, NotFound } from '@/app/shared/ui';
import { CardHeader } from '..';
import { CardWrapper, CardContent, CardInfo } from './WeatherCard.style';

interface WeatherCardProps {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
}

const WeatherCard = ({ weatherData, loading, error }: WeatherCardProps) => {
  const router = useRouter();
  const weatherDisplay = useWeatherDisplay(weatherData);

  const weatherInfo = useMemo(() => {
    if (!weatherData) return null;
    const iconUrl = getIconUrl(weatherData.icon);

    return (
      <Tooltip content='Click to get forecast'>
        <CardWrapper onClick={() => router.push(`/forecast/${weatherData.city.id}`)}>
          <CardHeader city={weatherData.city} />
          <CardContent>
            <Image loader={() => iconUrl} src={iconUrl} alt='weather icon' width={100} height={100} />
            <CardInfo>
              {weatherDisplay?.map((item) => (
                <p key={item.id}>
                  {item.label}: {item.value}
                </p>
              ))}
            </CardInfo>
          </CardContent>
        </CardWrapper>
      </Tooltip>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherData, weatherDisplay]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {error && <NotFound text={error} />}
          {weatherData && weatherInfo}
        </>
      )}
    </>
  );
};

export default WeatherCard;
