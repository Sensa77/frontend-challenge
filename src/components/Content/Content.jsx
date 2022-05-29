import React, { useContext } from "react";
import { MyContext } from "../../app/App";
import { Heart } from "../Heart";
import "./Content.scss";

export const Content = ({ cats = [] }) => {
  const { favoriteCats, setFavoriteCats } = useContext(MyContext);

  const findFavoriteCat = (cat) => {
    return favoriteCats.find((favoriteCat) => cat.id === favoriteCat.id);
  };

  const changeFavoriteCat = (cat) => {
    const catIndex = favoriteCats.findIndex(
      (favoriteCat) => cat.id === favoriteCat.id
    );
    if (catIndex >= 0) {
      setFavoriteCats([
        ...favoriteCats.slice(0, catIndex),
        ...favoriteCats.slice(catIndex + 1),
      ]);
    } else {
      setFavoriteCats([...favoriteCats, cat]);
    }
  };

  return (
    <div className="content">
      {cats.map((cat) => (
        <div className="content-item" key={cat.id} id={cat.id}>
          <img
            className="content-item__picture"
            alt=""
            src={cat.url}
            width="225px"
            height="225px"
          />
          <Heart
            id={cat.id}
            onClick={() => changeFavoriteCat(cat)}
            active={findFavoriteCat(cat)}
          />
        </div>
      ))}
    </div>
  );
};
