import React, { useState } from "react";

function TrafficLight() {
  const [color, setActiveLight] = useState(null);

  const setColor = (color) => {
    setActiveLight(color);
  };
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="stick"></div>
      <div className="body border border-5 border-black bg-black d-flex flex-column gap-3 p-2">
        <div
          className={`rounded-circle bg-danger ${
            color === "red" ? "highlight" : ""
          }`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`rounded-circle bg-warning ${
            color === "yellow" ? "highlight" : ""
          }`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`rounded-circle bg-success ${
            color === "green" ? "highlight" : ""
          }`}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
}

export default TrafficLight;
