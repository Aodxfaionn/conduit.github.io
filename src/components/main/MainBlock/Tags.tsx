import React from "react";

const Tags: React.FunctionComponent = () => {
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
  return (
    <div className="tags">
      <h3>Popular tags</h3>
      <ul>
        {popularTag.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
