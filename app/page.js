import "./page.scss";

import FavoriteHotels from "@/components/favoriteHotels/FavoriteHotels";
import FoundHotels from "@/components/foundHotels/FoundHotels";
import Header from "@/components/header/Header";
import SearchForm from "@/components/searchForm/SearchForm";

export default function Home() {
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
