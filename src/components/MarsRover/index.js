import React, { useState } from 'react'; 
import Form from '../Form/index.js';
import runMarsRover from '../../services/RunMarsRover/index.js';
import Map from '../Map/index.js';

export default function MarsRover () {
  const [ roverState, setRoverState ] = useState();

  function runRoverAndCreateMap (inputs) {
    const finalPosition = runMarsRover(inputs);
    setRoverState(finalPosition);
  }

  return (
    <>
      <h1>MARS ROVER ADVENTURE</h1>
      <Form callbackFn={runRoverAndCreateMap} />
      {roverState && <Map roverResults={roverState} />}
    </>
  )
}

