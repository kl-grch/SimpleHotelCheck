"use client";

import { useSelector } from "react-redux";
import FavoriteButton from "../favoriteButton/FavoriteButton";
import FavoriteHotelCard from "../favoriteHotelCard/FavoriteHotelCard";
import "./favoriteHotels.scss";

export default function FavoriteHotels() {
  const { favoriteHotels } = useSelector((state) => state.favoriteHotels);
  return (
    <div className="favorite-hotels">
      <div className="favorite-hotels__title">Избранное</div>
      <div className="favorite-hotels__filters">
        <FavoriteButton label="Рейтинг" />
        <FavoriteButton label="Цена" />
      </div>
      <div className="favorite-hotels__list">
        {favoriteHotels.length <= 0 ? (
          <div>No favorites</div>
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
