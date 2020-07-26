import React from 'react';

import Clock from 'react-live-clock';
import './main.scss';
import Alert from 'react-bootstrap/Alert';

function App() {
  var myMappings = {
    names: [["kilacoda", "India/Kolkata"],
      ["Aathish", "India/Kolkata"],
      ["huguesdvmx","Europe/Paris"],
      []]
};
  return (
    <div className="container-fluid">
      <Alert variant="primary">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <hr/>
        <p>
          This is Manim Community Members time now.
        </p>
      </Alert>
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
