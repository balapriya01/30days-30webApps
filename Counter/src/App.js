import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleSub = () => {
    setCount((count) => count - 1);
  };

  const handleAdd = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <div className="container">
        <div className="sub-con">
          <div className={`circle ${count > 0 ? "redd" : "bluee"}`}>
            <h1 className="text">{count}</h1>
          </div>
          <button className="btn" onClick={handleSub}>
            -
          </button>
          <button className="btn" onClick={handleAdd}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
