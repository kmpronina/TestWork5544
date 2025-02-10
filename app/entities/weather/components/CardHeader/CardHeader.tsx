import React, { useMemo } from "react";
import { CardHeaderStyle, CardHeaderTitle } from "./CardHeader.style";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import useWeatherStore from "@/entities/weather/api/useWeatherData";
import { ForecastData, WeatherData } from "@/entities/weather/types";
import { IconButton } from "@/shared/ui";

interface CardHeaderProps {
  city: WeatherData["city"] | ForecastData["city"];
}

const CardHeader = ({ city }: CardHeaderProps) => {
  const { favoriteCities, addFavoriteCity, removeFavoriteCity } =
    useWeatherStore();

  const isFavorite = useMemo(
    () => favoriteCities.includes(city.id),
    [favoriteCities, city.id]
  );

  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      removeFavoriteCity(city.id);
    } else {
      addFavoriteCity(city.id);
    }
  };

  return (
    <CardHeaderStyle>
      <CardHeaderTitle>{city.name}</CardHeaderTitle>
      <IconButton
        tooltip={isFavorite ? "Remove from favorite" : "Add to favorite"}
        onClick={(e) => handleToggleFavorite(e)}
        icon={isFavorite ? <MinusIcon /> : <PlusIcon />}
      />
    </CardHeaderStyle>
  );
};

export default CardHeader;
