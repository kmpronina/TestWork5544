import React, { useMemo } from "react";
import { CardHeaderStyle, CardHeaderTitle } from "./CardHeader.style";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { ForecastData, WeatherData } from "@/entities/weather/types";
import { IconButton } from "@/shared/ui";
import favoriteStore from "@/entities/weather/data/favoriteStore";

interface CardHeaderProps {
  city: WeatherData["city"] | ForecastData["city"];
}

const CardHeader = ({ city }: CardHeaderProps) => {
  const {
    favoriteCitiesIds = [],
    addFavoriteCityId,
    removeFavoriteCityId,
  } = favoriteStore();

  const isFavorite = useMemo(
    () => Boolean(favoriteCitiesIds?.includes(city.id)),
    [favoriteCitiesIds, city.id]
  );

  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      removeFavoriteCityId(city.id);
    } else {
      addFavoriteCityId(city.id);
    }
  };

  return (
    <CardHeaderStyle>
      <CardHeaderTitle>{city.name}</CardHeaderTitle>
      <IconButton
        tooltip={isFavorite ? "Remove from favorite" : "Add to favorite"}
        onClick={handleToggleFavorite}
        icon={isFavorite ? <MinusIcon /> : <PlusIcon />}
      />
    </CardHeaderStyle>
  );
};

export default CardHeader;
