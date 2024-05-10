import "./App.css";
import Rio from "./asset/rio.png";
import { FaComments } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

const App = () => {
  const [like, setLike] = useState(false);

  const toggle = () => {
    setLike(!like);
  };

  return (
    <>
      <div className="container">
        <h2>Double Click To Like</h2>
        <div className="sub-con">
          <div className="appbar">
            <span>RIO</span>
          </div>
          <div className="img">
            <img
              className="rioimg"
              src={Rio}
              alt="rio"
              onDoubleClick={toggle}
            />
          </div>
          <div className="footer">
            <FaComments className="msg-icon" />
            <AiOutlineStar />
            {like ? (
              <AiFillStar className="fill-star" onClick={toggle} />
            ) : (
              <AiOutlineStar className="out-star" onClick={toggle} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
