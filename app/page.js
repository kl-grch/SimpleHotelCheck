"use client";

import "./page.scss";

import FavoriteHotels from "@/components/favoriteHotels/FavoriteHotels";
import FoundHotels from "@/components/foundHotels/FoundHotels";
import Header from "@/components/header/Header";
import SearchForm from "@/components/searchForm/SearchForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthorizationStatus } from "@/components/authForm/authFormSlice";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("auth", true)) {
      dispatch(setAuthorizationStatus(true));
      router.push("/");
    } else {
      dispatch(setAuthorizationStatus(false));
      router.push("/auth");
    }
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="home">
        <div className="aside">
          <SearchForm />
          <FavoriteHotels />
        </div>
        <FoundHotels />
      </div>
    </>
  );
}
