"use client";

import useSWR from "swr";
import { useDispatch } from "react-redux";
import { getAllHotels } from "../components/foundHotels/foundHotelsSlise";

export default function useHotels(location, checkIn, checkOut) {
  const dispatch = useDispatch();
  const url = `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;

  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getAllHotels(data)));

  const { data, error } = useSWR(url, fetcher, { suspense: true });

  return {
    data,
    error,
  };
}
