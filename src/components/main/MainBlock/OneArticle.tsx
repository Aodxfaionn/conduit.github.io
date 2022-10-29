import React, { useState } from "react";
import { IArticle } from "./Text";

interface ArticlesProps {
  articles: IArticle;
}

export function OneArticle(props: ArticlesProps) {
  const [info, setInfo] = useState(false);
  let additionally;
  if (info) {
    additionally = (
      <div className="additionally">
        <img src={props.articles.image} className="cardImg" />
        <div>
          <p>Price: {props.articles.price}</p>
          <p>Rate: {props.articles.rating.rate}</p>
          <p>Count: {props.articles.rating.count}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="oneArticle" onClick={() => setInfo(!info)}>
      <h3>{props.articles.title}</h3>
      <p>{props.articles.description}</p>
      {additionally}
    </div>
  );
}
