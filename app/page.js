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
import { Container, Row, Col } from "react-bootstrap";

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
  }, [dispatch, router]);

  return (
    <>
      <Container fluid="xxl">
        <Header />
      </Container>

      <Container>
        <Row className="home">
          <Col xxl={4} className="aside">
            <SearchForm />
            <FavoriteHotels />
          </Col>
          <Col xxl="auto">
            <FoundHotels />
          </Col>
        </Row>
      </Container>
    </>
  );
}
