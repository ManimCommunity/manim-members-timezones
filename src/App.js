import React, { useState } from "react";

import Clock from "react-live-clock";
import "./main.scss";

function App() {
  const [dformat, setdformat] = useState(true);
  console.log(dformat);
  var nameList = {
    names: [
      ["jsonV", "America/Los_Angeles"],
      ["EulerTour", "America/Santa_Isabel"],
      ["MrMallIronmaker", "America/Santa_Isabel"],
      ["YoshiAsk", "America/Chicago"],
      ["friedkeenan", "America/Chicago"],
      ["aquabeam", "America/New_York" ],
      ["kilacoda", "America/New_York"],
      ["JasonGrace2282", "America/New_York"],
      ["🔥PgSuper🔥", "America/Sao_Paulo"],
      ["chopan050", "America/Santiago"],
      ["cobordism","Europe/Amsterdam"],
      ["huguesdvmx", "Europe/Paris"],
      ["XorUnison", "Europe/Paris"],
      ["kolibril13", "Europe/Paris"],
      ["oli", "Europe/Paris"],
      ["christopher.besch", "Europe/Paris"],
      ["behackl","Europe/Vienna"],
      ["MrDiver","Europe/Berlin"],
      ["philippimhof","Europe/Zurich"],
      ["ryanmccauley211", "Europe/London"],
      ["Aathish04", "Asia/Kolkata"],
      ["naveen521kk","Asia/Kolkata"],
      ["icedtea","Asia/Kuala_Lumpur"],
      ["Darylgolden", "Asia/Singapore"],
    ],
  };
  //true for 24 hour format and false for AM/Pm format
  function ampmbutton() {
    //if (dformat === "ampm") {
    if (dformat === true) {
      setdformat((dformat) => (dformat = false));
    } else {
      setdformat((dformat) => (dformat = true));
    }
  }
  return (
    <div className="container-xl">
      <h1 className="secondary">
        <u>Manim Community Members TimeZones</u>
      </h1>
      <div className="main-clock container">
        <div className="labelswitch">
          <label htmlFor="ampmswitch" className="labelswitch">
            AM/PM
          </label>
          <label class="switch">
            <input
              type="checkbox"
              id="ampmswitch"
              checked={dformat}
              onChange={ampmbutton}
            />
            <span className="slider round"></span>
          </label>
          <label htmlFor="ampmswitch" className="labelswitch">
            24-hour
          </label>
        </div>
        {dformat === false &&
          nameList.names.map((variant, idx) => (
            <div>
              <b>{variant[0]}</b> :{" "}
              <Clock
                format={"hh:mm:ss A (dddd)"}
                ticking={true}
                timezone={variant[1]}
              />
            </div>
          ))}
        {dformat === true &&
          nameList.names.map((variant, idx) => (
            <div key={idx}>
              <b>{variant[0]}</b> :{" "}
              <Clock
                format={"HH:mm:ss (dddd)"}
                ticking={true}
                timezone={variant[1]}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
