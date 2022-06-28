import React, { useState } from "react";

//include images into your bundle

//create your first component
const App = () => {
  const [color, setColor] = useState(0);
  
  return (
    <div className="container">
      <div className="row bg-black">...</div>
      <div className="container p-6">
        <div className="semaforo">
          <div
            onClick={() => setColor("red")}
            className={"light red" + (color === "red" ? " glow" : "")}
          ></div>
          <div
            onClick={() => setColor("yellow")}
            className={"light amarilla" + (color === "yellow" ? " glow" : "")}
          ></div>
          <div
            onClick={() => setColor("green")}
            className={"light verde" + (color === "green" ? " glow" : "")}
          ></div>
          
        </div>
      </div>
  
    </div>
  );
};

export default App;
