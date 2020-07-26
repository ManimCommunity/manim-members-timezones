import React from 'react';

import Clock from 'react-live-clock';
import './main.scss';

function App() {
  var myMappings = {
    names: [["kilacoda", "India/Kolkata"],
      ["Aathish04", "India/Kolkata"],
      ["huguesdvmx","Europe/Paris"],
      ["XorUnison","Europe/Paris"],
      ["🔥PgSuper🔥","America/Sao_Paulo"],
      ["YoshiAsk","America/Santa_Isabel"],
      ["TheQuarantinedSpy","America/Santa_Isabel"],
      ["paradox","America/Santa_Isabel"]]
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
