'use client';

import { useParams } from 'next/navigation';
import { Forecast } from '@/app/features';

const ForecastPage = () => {
  const { cityId } = useParams();

  return <Forecast cityId={Number(cityId)} />;
};

export default ForecastPage;
