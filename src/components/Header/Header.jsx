import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  const location = useLocation();
  const activeMain = location.pathname === "/" ? "header__item--isActive" : "";
  const activeFavorite =
    location.pathname === "/favorite" ? "header__item--isActive" : "";

  return (
    <nav className="header">
      <ul className="header__list">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className={`header__item ${activeMain}`}>Все котики</li>
        </Link>
        <Link to="/favorite" style={{ textDecoration: "none" }}>
          <li className={`header__item ${activeFavorite}`}>Любимые котики</li>
        </Link>
      </ul>
    </nav>
  );
};
