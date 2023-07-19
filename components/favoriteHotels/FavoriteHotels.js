"use client";

import { useSelector, useDispatch } from "react-redux";
import FavoriteButton from "../favoriteButton/FavoriteButton";
import FavoriteHotelCard from "../favoriteHotelCard/FavoriteHotelCard";
import "./favoriteHotels.scss";
import {
  sortFavoriteRate,
  sortFavoriteRateDown,
  sortFavoritePrice,
  sortFavoritePriceDown,
} from "./favoriteHotelsSlice";
import { useEffect, useState } from "react";

export default function FavoriteHotels() {
  const { favoriteHotels, filterFavoriteRate, filterFavoritePrice } =
    useSelector((state) => state.favoriteHotels);
  const dispatch = useDispatch();
  const [toggleRate, setToggleRate] = useState(false);
  const [togglePrice, setTogglePrice] = useState(false);
  const [isActiveDownRate, setIsActiveDownRate] = useState(false);
  const [isActiveDownPrice, setIsActiveDownPrice] = useState(false);

  const handleFilterRate = () => {
    setToggleRate(!toggleRate);
    if (favoriteHotels.length > 1 && toggleRate === false) {
      return dispatch(sortFavoriteRate()) && setIsActiveDownRate(false);
    } else if (favoriteHotels.length > 1 && toggleRate === true) {
      return dispatch(sortFavoriteRateDown()) && setIsActiveDownRate(true);
    }
    return false;
  };

  const handleFilterPrice = () => {
    setTogglePrice(!togglePrice);
    if (favoriteHotels.length > 1 && togglePrice === false) {
      return dispatch(sortFavoritePrice()) && setIsActiveDownPrice(false);
    } else if (favoriteHotels.length > 1 && togglePrice === true) {
      return dispatch(sortFavoritePriceDown()) && setIsActiveDownPrice(true);
    }
    return false;
  };

  return (
    <div className="favorite-hotels">
      <div className="favorite-hotels__title">Избранное</div>
      <div className="favorite-hotels__filters">
        <FavoriteButton
          label="Рейтинг"
          onClick={handleFilterRate}
          isActive={filterFavoriteRate}
          isActiveDown={isActiveDownRate}
        />
        <FavoriteButton
          label="Цена"
          onClick={handleFilterPrice}
          isActive={filterFavoritePrice}
          isActiveDown={isActiveDownPrice}
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
