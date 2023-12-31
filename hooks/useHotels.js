import useSWR from "swr";
import { useDispatch } from "react-redux";
import { getAllHotels } from "../components/foundHotels/foundHotelsSlise";

export default function useHotels(location, checkIn, checkOut) {
  const dispatch = useDispatch();
  const url = `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;

  const fetcher = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((data) => dispatch(getAllHotels(data)));

  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
  };
}
