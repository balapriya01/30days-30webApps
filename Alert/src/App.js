import { useState } from "react";
import "./App.css";
import Alert from "./component/Alert";

const App = () => {

  const[status, setStatus] = useState(false);

  setTimeout(() => {
    setStatus(true);
  }, 3000);


  return (
    <>
      <div className="container">
        <Alert type="success" message="Success" />
        <Alert type="error" message="Error" />
        {status && <Alert type="trigger" message="Trigger"/>}
      </div>
    </>
  );
};

export default App;
