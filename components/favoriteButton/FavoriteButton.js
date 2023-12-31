"use client";

import "./favoriteButton.scss";
import clsx from "clsx";

export default function FavoriteButton({
  label,
  onClick,
  isActive,
  isActiveDown,
}) {
  return (
    <div
      className={clsx("favorite-button", {
        "favorite-button--active": isActive,
        "favorite-button--active-down": isActiveDown,
      })}
      onClick={onClick}
    >
      <div className="favorite-button__label">{label}</div>
      <div className="favorite-button__switches">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M13.5 7.24264L12.4393 8.3033L9.25736 5.09851L6.07538 8.3033L5.01472 7.24264L9.25736 3L13.5 7.24264Z"
            fill="black"
            fillOpacity="0.32"
          />
          <path
            d="M13.5 10.8325L12.4393 9.77181L9.25736 12.9538L6.07538 9.77181L5.01472 10.8325L9.25736 15.0751L13.5 10.8325Z"
            fill="black"
            fillOpacity="0.32"
          />
        </svg>
      </div>
    </div>
  );
}
