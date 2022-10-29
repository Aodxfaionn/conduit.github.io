import React from "react";

type Props = {
  lastArticleIndex: number;
  totalArticles: number;
  paginate: any;
};

function Pagination({ lastArticleIndex, totalArticles, paginate }: Props) {
  const pageNumber: Array<number> = [];
  for (let i = 1; i <= 4; i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number}>
            <a href="#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
