'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { Tooltip } from '@radix-ui/themes';
import { CardWrapper, CardContent, CardHeader, CardHeaderTitle, CardInfo } from './WeatherCard.style';
import { WeatherData } from '@/app/entities/weather/types';
import getIconUrl from '@/app/entities/weather/api/utils/getIconUrl';
import { IconButton } from '@/app/shared/ui';
import useWeatherStore from '../../api/useWeatherData';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

interface WeatherCardProps {
  weatherData: WeatherData;
}
const WeatherCard = ({ weatherData }: WeatherCardProps) => {
  const { favoriteCities, addFavoriteCity, removeFavoriteCity } = useWeatherStore();

  const iconUrl = useMemo(() => getIconUrl(weatherData.icon), [weatherData.icon]);
  const isFavorite = useMemo(() => favoriteCities.includes(weatherData.cityId), [favoriteCities, weatherData.cityId]);

  const weatherDisplay: { id: number; label: string; value: string }[] = useMemo(
    () => [
      { id: 1, label: 'Description', value: weatherData.description },
      { id: 2, label: 'Temperature', value: weatherData.temp + '°C' },
      { id: 3, label: 'Feels like', value: weatherData.feelsLike + '°C' },
      { id: 4, label: 'Humidity', value: weatherData.humidity + '%' },
      { id: 5, label: 'Pressure', value: weatherData.press + 'hPa' },
    ],
    [weatherData],
  );

  useEffect(() => {
    console.log(favoriteCities);
  }, [favoriteCities]);

  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('clicked icon', weatherData.cityId);
    if (isFavorite) {
      removeFavoriteCity(weatherData.cityId);
    } else {
      addFavoriteCity(weatherData.cityId);
    }
  };

  const onClickCard = () => {
    console.log('clicked card', weatherData.city);
  };
  // Gasselterboerveenschemond
  return (
    <Tooltip content='Click to get full info'>
      <CardWrapper onClick={onClickCard}>
        <CardHeader>
          <CardHeaderTitle>{weatherData.city}</CardHeaderTitle>
          <IconButton
            tooltip={isFavorite ? 'Remove from favorite' : 'Add to favorite'}
            onClick={(e) => handleToggleFavorite(e)}
            icon={isFavorite ? <MinusIcon /> : <PlusIcon />}
          />
        </CardHeader>
        <CardContent>
          <Image loader={() => iconUrl} src={iconUrl} alt='weather icon' width={100} height={100} />
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
