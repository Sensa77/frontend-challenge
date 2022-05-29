import React from "react";
import "./Heart.scss";

export const Heart = ({ onClick, active }) => {
  const activeHeart = active ? "heart--isActive" : "";

  return (
    <button
      type="button"
      className={`heart ${activeHeart}`}
      onClick={onClick}
    />
  );
};
