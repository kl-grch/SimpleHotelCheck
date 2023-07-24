"use client";

import "./header.scss";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setAuthorizationStatus } from "../authForm/authFormSlice";
import { useRouter } from "next/navigation";

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className="header">
      <Link href="/">
        <div className="header__label">Simple Hotel Check</div>
      </Link>
      <div className="header__logout">
        <div className="logout__label">Выйти</div>
        <div
          className="logout__icon"
          onClick={() => {
            localStorage.setItem("auth", false),
              dispatch(setAuthorizationStatus(false)),
              router.push("/auth");
          }}
        >
          <Image src="/icons/logout.svg" alt="logout" width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
