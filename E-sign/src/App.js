import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");

  function handleName(event) {
    // console.log();
    setName(event.target.value);
  }

  const [date, setDate] = useState("");

  const handleDate = (event) => {
    setDate(event.target.value);
  };
  return (
    <>
      <div className="title">
        <form>
          <h4 className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            voluptate non veniam officia earum. Aliquam veritatis labore modi
            magnam quaerat, error voluptas. Maiores, provident! Enim nihil ipsum
            aliquam error recusandae! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.
          </h4>
          <div className="main-text">
            <h4 className="sign">Name: {name}</h4>
            <h5 className="sign">Dob:{date}</h5>
          </div>

          <input id="sign" onChange={handleName} value={name} />
          <input type="date" value={date} onChange={handleDate} />
        </form>
      </div>
    </>
  );
};

export default App;
