"use client";

import "./button.scss";

export default function Button({ children = "Button" }) {
  return <button className="button">{children}</button>;
}
