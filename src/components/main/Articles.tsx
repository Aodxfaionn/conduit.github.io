import React from "react";

const Articles: React.FunctionComponent = () => {
  return (
    <div className="articles">
да
{/*   React.useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json")
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
      })
      .catch((err) => {
        console.warn(err);
        alert("Не удалось получить информацию о курсе валют");
      });
  }, []); */}
    </div>
  );
};

export default Articles;
