import React, { useState, useEffect } from "react";
import Tags from "./Tags";
import Articles from "./Articles";
import Title from "./Title";
import Pagination from "./Pagination";

const Block: React.FunctionComponent = () => {
  return (
    <div>
      <Title />
      <div className="block">
        <Articles />
        <Tags />
      </div>
    </div>
  );
};

export default Block;
