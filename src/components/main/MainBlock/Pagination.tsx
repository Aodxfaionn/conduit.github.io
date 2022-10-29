import React from "react";

type Props = {
    lastArticleIndex: number,
    totalArticles: number
}

function Pagination({ lastArticleIndex, totalArticles }: Props) {
    const pageNumber:Array<number> = []
    for(let i = 1; i <= (totalArticles / lastArticleIndex); i++) {
        pageNumber.push(i)
    }
    return (
        <div>
<ul className="pagination">
    {
        pageNumber.map(number => {
       <li key={number}></li>     
        })
    }
</ul>
        </div>
    )
}

export default Pagination;