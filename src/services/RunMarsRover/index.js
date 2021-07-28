// validate crashed

export default function runMarsRover(inputs) {
  const finalState = runMovements(inputs);
  
  return { ...finalState, directions: inputs.directions }
}

function runMovements(inputs) {
  if (inputs.directions === '') {
    return inputs;
  }

  const nextDirection = inputs.directions.charAt(0);
  let newInputs = { ...inputs, directions: inputs.directions.substring(1) };

  if (nextDirection === "M") {
    newInputs = moveForward(newInputs);
  } else if (nextDirection === "L") {
    newInputs = turnLeft(newInputs);
  } else {
    newInputs = turnRight(newInputs);
  }
  if(newInputs.xPosition > newInputs.xAxis || newInputs.xPosition < 0 || newInputs.yPosition > newInputs.yAxis || newInputs.yPosition < 0 ) {
    return { ...inputs, crashed: true };
  }
  return runMovements(newInputs);
}

function moveForward(inputs) {
  if (inputs.orientation === "E") {
    return { ...inputs, xPosition: inputs.xPosition + 1 }
  } else if (inputs.orientation === "S") {
    return { ...inputs, yPosition: inputs.yPosition - 1 }
  } else if (inputs.orientation === "W") {
    return { ...inputs, xPosition: inputs.xPosition - 1 }
  }
  return { ...inputs, yPosition: inputs.yPosition + 1 }
}

function turnLeft(inputs) {
  if (inputs.orientation === "W") {
    return { ...inputs, orientation: "S" }
  } else if (inputs.orientation === "S") {
    return { ...inputs, orientation: "E" }
  } else if (inputs.orientation === "E") {
    return { ...inputs, orientation: "N" }
  }
  return { ...inputs, orientation: "W" };
}

function turnRight(inputs) {
  if (inputs.orientation === "E") {
    return { ...inputs, orientation: "S" };
  } else if (inputs.orientation === "S") {
    return { ...inputs, orientation: "W" };
  } else if (inputs.orientation === "W") {
    return { ...inputs, orientation: "N" };
  }
  return { ...inputs, orientation: "E" };
}
