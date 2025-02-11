'use client';

import type React from 'react';
import { useEffect, useState } from 'react';
import { weatherStore } from '@/app/entities/weather/data/weatherStore';
import { Container } from './WeatherSearch.style';
import { useDebounce } from '@/app/shared/lib/useDebounce';
import { Input } from '@/app/shared/ui';
import { WeatherCard } from '@/app/entities/weather/ui';

export default function WeatherSearch() {
  const [city, setCity] = useState('');
  const debouncedValue = useDebounce(city);
  const { weatherData, error, loading, fetchWeather } = weatherStore();

  useEffect(() => {
    if (debouncedValue) {
      fetchWeather(debouncedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <Container>
      <Input
        variant='surface'
        placeholder='Search the city'
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <WeatherCard weatherData={weatherData} loading={loading} error={error} />
    </Container>
  );
}
