"use client";

import useSWR from "swr";
import { useDispatch } from "react-redux";
import { getAllHotels } from "../components/foundHotels/foundHotelsSlise";

export default function useHotels(location, checkIn, checkOut) {
  const dispatch = useDispatch();
  const url = `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;

  const fetcher = (url) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getAllHotels(data)));

  const { data, error, isLoading } = useSWR(
    url,
    fetcher,
    // { suspense: true },
    {
      fallbackData: [
        {
          hotelName: "Name",
          stars: 5,
          priceFrom: 1000,
          countDays: 1,
          checkIn: "2023-12-12",
          hotelId: 1,
          favoriteStatus: true,
        },
      ],
    }
  );

  return {
    data,
    error,
    isLoading,
  };
}
