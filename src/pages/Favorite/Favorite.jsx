import React, { useContext } from "react";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content/Content";
import { MyContext } from "../../app/App";

export const Favorite = () => {
  const { favoriteCats } = useContext(MyContext);

  return (
    <>
      <Header />
      <Content cats={favoriteCats} />
    </>
  );
};
