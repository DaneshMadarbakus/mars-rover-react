import React from 'react'; 
import Form from '../Form/index.js';

export default function MarsRover () {
  // const [ exampleState, setState ] = useState('');
  return (
    <>
      <h1>MARS ROVER ADVENTURE</h1>
      <Form callbackFn={callbackFn} />
    </>
  )
}

function callbackFn () {
  console.log('Danesh');
}