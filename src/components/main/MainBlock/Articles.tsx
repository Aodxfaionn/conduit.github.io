import React, { useState, useEffect } from "react";
import axios from "axios";
import { OneArticle } from "./OneArticle";
import { articles, IArticle } from "./Text";

const Articles: React.FunctionComponent = () => {
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

  const [currentPage, setcurrentPage] = useState(1);
  const [quanity] = useState(5);

  const lastArticleIndex: number = currentPage * quanity;
  const firstCountryIndex: number = lastArticleIndex - quanity;
  const currentArticle = articles.slice(firstCountryIndex, lastArticleIndex);

  return (
    <div className="articles">
      {loading && <p className="loading">Loading...</p>}
      {articles.map((article) => (
        <OneArticle articles={article} key={article.id} />
      ))}
    </div>
  );
};

export default Articles;
