import React from "react";

const Tags: React.FunctionComponent = (string) => {
  let popularTag: string[] = [
    "implementations",
    "welcome",
    "introduction",
    "codebaseShow",
    "ipsum",
    "qui",
    "et",
    "quia",
    "cupiditate",
    "deserunt",
  ];

  const test = (elem: string) => console.log(elem);

  return (
    <div className="tags">
      <h3>Popular tags</h3>
      <ul>
        {popularTag.map((tag) => (
          <li key={tag} onClick={() => test(tag)}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
