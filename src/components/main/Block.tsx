import React from "react";
import Tags from "./Tags";
import Articles from "./Articles";

const Block: React.FunctionComponent = () => {
  return (
    <div className="block">
      <Articles />
      <Tags />
    </div>
  );
};

export default Block;
