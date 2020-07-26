import React, { useState } from "react";

import Clock from "react-live-clock";
import "./main.scss";

function App() {
  const [dformat, setdformat] = useState("int24");
  console.log(dformat)
  var nameList = {
    names: [
      ["EulerTour", "America/Santa_Isabel"],
      ["YoshiAsk", "America/Santa_Isabel"],
      ["paradox", "America/Santa_Isabel"],
      ["TheQuarantinedSpy", "America/Santa_Isabel"],
      ["leotrs", "America/Blanc-Sablon"],
      ["🔥PgSuper🔥", "America/Sao_Paulo"],
      ["huguesdvmx", "Europe/Paris"],
      ["XorUnison", "Europe/Paris"],
      ["kolibril13", "Europe/Paris"],
      ["Aathish04", "Asia/Kolkata"],
      ["kilacoda", "Asia/Kolkata"],
    ],
  };
  //int24 for 24 hour format and ampm for AM/Pm format
  function ampmbutton() {
    if (dformat === "ampm") {
      setdformat(dformat => dformat="int24");
    }else{
      setdformat(dformat => dformat="ampm");
    }}
  return (
    <div className="container-fluid">
      <h1 className="primary">Manim Community Members TimeZones</h1>
      <div className="main-clock">
          {dformat === "ampm" &&
              nameList.names.map((variant, idx) => (
                <div>
                  <b>{variant[0]}</b> :{" "}
                  <Clock
                    format={"hh:mm:ss A"}
                    ticking={true}
                    timezone={variant[1]}
                  />
                </div>
              ))}{dformat === "int24" &&
                nameList.names.map((variant, idx) => (
                <div>
                  <b>{variant[0]}</b> :{" "}
                  <Clock
                    format={"HH:mm:ss"}
                    ticking={true}
                    timezone={variant[1]}
                  />
                </div>))
                }
                </div>
                <button className="btn btn-primary changebutton" onClick={ampmbutton}><i class="fas fa-hourglass-start"></i></button>
                </div>
  );
}

export default App;
