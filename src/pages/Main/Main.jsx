import React, { useEffect, useState } from "react";
import "./Main.scss";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content/Content";

export const Main = () => {
  const [catArray, setCatArray] = useState([]);

  useEffect(() => {
    const cat = async () => {
      const result = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=15&order=Desc&page=0&api_key=e12b5b68-0353-4ee4-a518-d33b22b829dd"
      ).then((res) => res.json());
      setCatArray(result);
    };
    cat();
  }, []);
  return (
    <>
      <Header />
      <Content cats={catArray} />
    </>
  );
};
