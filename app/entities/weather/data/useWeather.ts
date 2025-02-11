import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { WeatherData } from '../types';
import getUrl from './utils/getUrl';

function useWeather(city: string | number) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (!city) {
        setLoading(false);
        return;
      }
      try {
        const url = getUrl(city);
        const response: AxiosResponse = await axios.get(url);

        setData({
          dt: response.data.dt ?? 0,
          description: response.data.weather?.[0]?.description ?? '',
          temp: response.data.main?.temp ?? 0,
          feelsLike: response.data.main?.feels_like ?? 0,
          city: {
            id: response.data.id ?? 0,
            name: response.data.name ?? city,
          },
          humidity: response.data.main?.humidity ?? 0,
          press: response.data.main?.pressure ?? 0,
          wind: response.data.wind?.speed ?? 0,
          clouds: response.data.clouds?.all ?? 0,
          visibility: response.data.visibility ?? 0,
          icon: response.data.weather?.[0]?.icon ?? '',
        });
        setError(null);
      } catch (error) {
        setError('Error getting the data');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return { data, loading, error };
}

export default useWeather;
