'use client';

import { useMemo } from 'react';
import { FavoriteCitiesContainer } from './FavoriteCities.style';
import FavoriteCard from '@/app/entities/weather/ui/FavoriteCard/FavoriteCard';
import { Loading, NotFound } from '@/app/shared/ui';

interface FavoriteCitiesProps {
  favoriteCitiesIds: number[];
  _hasHydrated: boolean;
}

const FavoriteCities = ({ favoriteCitiesIds, _hasHydrated }: FavoriteCitiesProps) => {
  const content = useMemo(() => {
    if (!_hasHydrated) {
      return <Loading />;
    }

    if (!favoriteCitiesIds.length) {
      return <NotFound text='Add a city to your favorites' />;
    }

    return favoriteCitiesIds.map((id) => <FavoriteCard key={id} cityId={id} />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_hasHydrated, favoriteCitiesIds]);

  return <FavoriteCitiesContainer>{content}</FavoriteCitiesContainer>;
};

export default FavoriteCities;
