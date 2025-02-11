import { ForecastData, GroupedForecast } from '@/app/entities/weather/types';

function groupWeatherByDays(weatherArray: ForecastData['list']): GroupedForecast {
  const now = new Date();
  const today = now.getDate();

  return weatherArray.reduce(
    (grouped: GroupedForecast, item) => {
      const date = new Date(item.dt * 1000);
      const dayDiff = date.getDate() - today;

      if (dayDiff === 0) {
        grouped.today.push(item);
      } else if (dayDiff === 1) {
        grouped.tomorrow.push(item);
      } else if (dayDiff === 2) {
        grouped.dayAfterTomorrow.push(item);
      }

      return grouped;
    },
    {
      today: [],
      tomorrow: [],
      dayAfterTomorrow: [],
    },
  );
}

export default groupWeatherByDays;
