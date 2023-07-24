"use client";

import "./button.scss";

export default function Button({ children = "Button" }) {
  return (
    <button type="submit" className="button">
      {children}
    </button>
  );
}
