"use client";

import "./favoriteHotels.scss";
import { useSelector, useDispatch } from "react-redux";
import FavoriteButton from "../favoriteButton/FavoriteButton";
import FavoriteHotelCard from "../favoriteHotelCard/FavoriteHotelCard";
import {
  sortFavoriteRate,
  sortFavoriteRateDown,
  sortFavoritePrice,
  sortFavoritePriceDown,
  clearFavoriteFilters,
} from "./favoriteHotelsSlice";
import { useEffect } from "react";

export default function FavoriteHotels() {
  const {
    favoriteHotels,
    filterFavoriteRate,
    filterFavoritePrice,
    filterFavoriteRateDown,
    filterFavoritePriceDown,
  } = useSelector((state) => state.favoriteHotels);
  const dispatch = useDispatch();

  const handleFilterRate = () => {
    if (favoriteHotels.length > 1 && filterFavoriteRate === false) {
      return dispatch(sortFavoriteRate());
    } else if (favoriteHotels.length > 1 && filterFavoriteRateDown === false) {
      return dispatch(sortFavoriteRateDown());
    }
    return false;
  };

  const handleFilterPrice = () => {
    if (favoriteHotels.length > 1 && filterFavoritePrice === false) {
      return dispatch(sortFavoritePrice());
    } else if (favoriteHotels.length > 1 && filterFavoritePriceDown === false) {
      return dispatch(sortFavoritePriceDown());
    }
    return false;
  };

  useEffect(() => {
    if (favoriteHotels.length < 1) {
      dispatch(clearFavoriteFilters());
    }
  }, [dispatch, favoriteHotels.length]);

  return (
    <div className="favorite-hotels">
      <div className="favorite-hotels__title">Избранное</div>
      <div className="favorite-hotels__filters">
        <FavoriteButton
          label="Рейтинг"
          onClick={handleFilterRate}
          isActive={filterFavoriteRate}
          isActiveDown={filterFavoriteRateDown}
        />
        <FavoriteButton
          label="Цена"
          onClick={handleFilterPrice}
          isActive={filterFavoritePrice}
          isActiveDown={filterFavoritePriceDown}
        />
      </div>
      <div className="favorite-hotels__list">
        {favoriteHotels.length <= 0 ? (
          <div className="list__no-items">No favorites</div>
        ) : (
          favoriteHotels.map((item) => {
            return (
              <div key={item.hotelId} className="list__item">
                <FavoriteHotelCard
                  hotelName={item.hotelName}
                  stars={item.stars}
                  priceFrom={item.priceFrom}
                  countDays={item.countDays}
                  checkIn={item.checkIn}
                  hotelId={item.hotelId}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
