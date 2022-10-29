import React, { useState, useEffect } from "react";
import axios from "axios";
import { OneArticle } from "./OneArticle";
import { articles, IArticle } from "./Text";
import Pagination from "./Pagination";

const Articles: React.FunctionComponent = () => {
  /* Получение массива статей (товаров в моем случае) */
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchArticles() {
    setLoading(true);
    const response = await axios.get<IArticle[]>(
      "https://fakestoreapi.com/products"
    );
    setArticles(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  /* Поиск по названию */
  const [value, setValue] = useState("");
  const filtredArticles = articles.filter((art) => {
    return art.title.toLowerCase().includes(value.toLowerCase());
  });

  /* Пагинация */
  const [currentPage, setcurrentPage] = useState(1);
  const [quanity] = useState(5);

  const lastArticleIndex: number = currentPage * quanity;
  const firstCountryIndex: number = lastArticleIndex - quanity;
  const currentArticle = filtredArticles.slice(
    firstCountryIndex,
    lastArticleIndex
  );
  const paginate = (pagenumber: number) => setcurrentPage(pagenumber);

  return (
    <div className="articles">
      <input
        type="text"
        placeholder="Search in title"
        onChange={(event) => setValue(event.target.value)}
      />

      {loading && <p className="loading">Loading...</p>}
      {currentArticle.map((article) => (
        <OneArticle articles={article} key={article.id} />
      ))}
      <Pagination
        lastArticleIndex={lastArticleIndex}
        totalArticles={articles.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Articles;
