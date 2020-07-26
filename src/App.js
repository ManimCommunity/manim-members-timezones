import React from 'react';

import Clock from 'react-live-clock';
import './main.scss';

function App() {
  var myMappings = {
    names: [
      ["EulerTour","America/Santa_Isabel"],
      ["YoshiAsk","America/Santa_Isabel"],
      ["paradox","America/Santa_Isabel"],
      ["TheQuarantinedSpy","America/Santa_Isabel"],
      ["leotrs","America/Blanc-Sablon"],
      ["🔥PgSuper🔥","America/Sao_Paulo"],
      ["huguesdvmx","Europe/Paris"],
      ["XorUnison","Europe/Paris"],
      ["kolibril13","Europe/Paris"],
      ["Aathish04", "India/Kolkata"],
      ["kilacoda", "India/Kolkata"],
      ]
};
  return (
    <div className="container-fluid">
      <h1 className="primary">Manim Community Members TimeZones</h1>
      <div className="main-clock">
          {myMappings.names.map((variant, idx) => (
            <div>
              <b>{variant[0]}</b> : <Clock format={'hh:mm:ss A'} ticking={true} timezone={variant[1]} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
