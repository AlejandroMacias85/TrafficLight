import React, { useState, useEffect } from "react";

//include images into your bundle

//create your first component
const App = () => {
  const [color, setColor] = useState(0);
  const [active, setActive] = useState("green");

  // useEffect(() => {
  //   if(active=== "red") {
  //     setActive(cambiar, 1000);
  //   } 

  //   function cambiar() {
  //     setColor("color");
  //   }
  // });
  // const button = () => {
  //   if(cambiar){
  //     glow
  //     changeColor()
  //   }
  // }
  // React.useEffect(() => {button()})

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
