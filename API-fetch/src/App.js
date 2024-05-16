import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./components/Card1";
import Card2 from "./components/Card2";
import Button from "./components/Button";

const App = () => {
  const [products, setProducts] = useState([]);
  const [tech, setTech] = useState([]);
  // let uuid = crypto.randomUUID();  //Was trying to add random unique ID, but failed drastically, finallly used uuidv4
  const [click, setClick] = useState();

  const handleClick = useCallback(  async () => {
    let promise = await fetch("https://www.boredapi.com/api/activity");
    let data = await promise.json();
    setProducts([data]);
    setClick(true);
    // .then((response) => response.json())
    // .then((data) => {
    //   setProducts([data]);
    //   // console.log(data);
    // });
  }, [])
  
  
  
 

  const handleTech = useCallback(() => {
    fetch("https://techy-api.vercel.app/api/json")
      .then((response) => response.json())
      .then((data) => {
        setTech([data]);
        setClick(false);
        console.log(data);
      });
  }, [])
  
  

  useEffect(() => {
    handleClick();
    handleTech();
  }, [handleClick, handleTech]);

  return (
    <>
      <div className="container">
        <div className="sub-con">
          <div className="btn-con">
            <Button name="Time Pass??" Click={handleClick} />
            <Button name="Techyyy??" Click={handleTech} />
          </div>
          <div>
            {click &&
              products.map((product) => (
                <Card
                  key={product.key}
                  product={product}
                  activity={product.activity}
                  type={product.type}
                />
              ))}
            {click ||
              tech.map((techreply) => (
                <Card2
                  key={uuidv4()} //Because, this API key was not containing any unique ID.
                  message={techreply.message}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
