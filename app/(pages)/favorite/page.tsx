"use client";

import React from "react";
import favoriteStore from "@/app/entities/weather/data/favoriteStore";
import FavoriteCities from "@/app/features/FavoriteCities/FavoriteCities";

const FavoritePage = () => {
  const favoriteCitiesIds = favoriteStore((state) => state.favoriteCitiesIds);
  const _hasHydrated = favoriteStore((state) => state._hasHydrated);

  return (
    <FavoriteCities
      favoriteCitiesIds={favoriteCitiesIds}
      _hasHydrated={_hasHydrated}
    />
  );
};

export default FavoritePage;
