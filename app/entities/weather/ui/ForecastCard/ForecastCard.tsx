'use client';

import { ForecastData } from '@/app/entities/weather/types';
import getTime from '../utils/getTime';
import { useWeatherDisplay } from '../utils/useWeatherDisplay';
import { ForecastCardWrapper, ForecastCardHeader, ForecastCardContent } from './ForecastCard.style';

interface ForecastCardProps {
  forecastItem: ForecastData['list'][0];
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
