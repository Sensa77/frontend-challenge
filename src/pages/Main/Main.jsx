import React, { useEffect, useState } from "react";
import "./Main.scss";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content/Content";
import InfiniteScroll from "react-infinite-scroll-component";

export const Main = () => {
  const [catArray, setCatArray] = useState([]);
  const [page, setPage] = useState(0);

  const downloadCats = async (page) => {
    const result = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=19&order=Desc&page=${page}&api_key=e12b5b68-0353-4ee4-a518-d33b22b829dd`
    ).then((res) => res.json());
    setCatArray([...catArray, ...result]);
    setPage(page + 1);
  };

  useEffect(() => {
    downloadCats(page);
  }, []);

  return (
    <InfiniteScroll
      dataLength={catArray.length}
      next={() => downloadCats(page)}
      hasMore={true}
      loader={<p className="loading">... загружаем еще котиков ...</p>}
    >
      <Header />
      <Content cats={catArray} />
    </InfiniteScroll>
  );
};
