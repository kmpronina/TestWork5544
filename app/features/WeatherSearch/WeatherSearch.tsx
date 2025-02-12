'use client';

import { useEffect, useState } from 'react';
import { weatherStore } from '@/app/entities/weather/data/weatherStore';
import { WeatherCard } from '@/app/entities/weather/ui';
import { useDebounce } from '@/app/shared/lib/useDebounce';
import { Button, Input } from '@/app/shared/ui';
import { Container, InputWrapper } from './WeatherSearch.style';

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

  const useCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeather({ lat: position.coords.latitude, lon: position.coords.longitude });
    });
  };

  return (
    <Container>
      <InputWrapper>
        <Input
          variant='surface'
          placeholder='Search the city'
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button label='Use current location' disabled={loading} onClick={useCurrentLocation} />
      </InputWrapper>
      <WeatherCard weatherData={weatherData} loading={loading} error={error} />
    </Container>
  );
}
