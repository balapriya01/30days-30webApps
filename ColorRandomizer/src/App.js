import { useState } from "react";
import "./App.css";

const App = () => {

    const [color, setColor] = useState("#ffffff");

    const handleColor = () => {
        setColor(randomColor());
    }

    const randomColor = () => {
        let alphanum = "0123456789ABCDEF";
        let color = "#";
        for(let i = 0; i < 6; i++){
            color += alphanum[Math.floor(Math.random() * 16)];
        }

        return color;
    }
    

  return (
    <>
    
      <div className="container" >
        <h2 style={{color : color}}>Philosophy of color</h2>
        <div className="btn-con" style={{backgroundColor : color}}>
          <button onClick={handleColor} className="btn">Change</button>
        </div>
      </div>
    </>
  );
};

export default App;
