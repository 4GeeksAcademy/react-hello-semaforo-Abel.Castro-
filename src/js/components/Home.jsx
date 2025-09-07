import React, { useState } from "react";

export function Home() {
  const [selectedColor, setSelectedColor] = useState("amarillo");

  return (
    <>
      <div className="poste"></div>
      <div className="semaforo">
        <div
          onClick={() => setSelectedColor("rojo")}
          className={
            "rojo" + (selectedColor === "rojo" ? " glow" : "")
          }
        ></div>
        <div
          onClick={() => setSelectedColor("amarillo")}
          className={
            "amarillo" + (selectedColor === "amarillo" ? " glow" : "")
          }
        ></div>
        <div
          onClick={() => setSelectedColor("verde")}
          className={
            "verde" + (selectedColor === "verde" ? " glow" : "")
          }
        ></div>
      </div>
    </>
  );
}

export default Home;