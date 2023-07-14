"use client";

import "./foundHotels.scss";

import dayjs from "dayjs";
import "dayjs/locale/ru";
import Image from "next/image";
import FoundHotelCard from "../foundHotelCard/FoundHotelCard";
import { useSelector } from "react-redux";
import { endNumber } from "@/utils/endNumber";
import useHotels from "@/hooks/useHotels";

const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4_.png",
];

export default function FoundHotels() {
  const { favoriteHotels } = useSelector((state) => state.favoriteHotels);
  const { foundHotels } = useSelector((state) => state.foundHotels);
  const { location, checkIn, checkOut, countDays } = useSelector(
    (state) => state.searchForm
  );

  function getFavoriteStatus(status) {
    if (favoriteHotels.some((item) => item.hotelId === status)) {
      return true;
    }
  }

  const { data, error, isLoading } = useHotels(location, checkIn, checkOut);

  // if (error) return <div>Error</div>;
  // if (isLoading) return <div>Loading</div>;

  const updateLocale = require("dayjs/plugin/updateLocale");
  dayjs.locale("ru");
  dayjs.extend(updateLocale);
  dayjs.updateLocale("ru", {
    months: [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ],
  });

  return (
    <div className="found-hotels">
      <div className="found-hotels__header">
        <div className="header__location">
          <div className="location__label">Отели</div>
          <div className="location__arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="20"
              viewBox="0 0 11 20"
              fill="none"
            >
              <path
                d="M1 1.33334L9.66667 10L1 18.6667"
                stroke="#A7A7A7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="location__city">{location}</div>
        </div>
        <div className="header__date">
          {dayjs(checkIn).format("DD MMMM YYYY")}
        </div>
      </div>
      <div className="found-hotels__images">
        {images.map((item, i) => {
          return (
            <div key={i} className="images__item">
              <Image src={item} alt="img" width={164} height={149} />
            </div>
          );
        })}
      </div>
      <div className="found-hotels__list">
        <div className="list__favorite">
          Добавлено в Избранное:{" "}
          <span>{favoriteHotels ? favoriteHotels.length : 0}</span>{" "}
          {endNumber(favoriteHotels?.length, "отелей", "отель", "отеля")}
        </div>
        <div className="list__items">
          {foundHotels.map((item) => {
            return (
              <div key={item.hotelId} className="items__item">
                <FoundHotelCard
                  hotelName={item.hotelName}
                  stars={item.stars}
                  priceFrom={item.priceFrom}
                  countDays={countDays}
                  checkIn={checkIn}
                  hotelId={item.hotelId}
                  favoriteStatus={getFavoriteStatus(item.hotelId)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
