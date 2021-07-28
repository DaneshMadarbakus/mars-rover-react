import useSignUpForm from '../../hooks/useForm/index';

export default function Form ({callbackFn}) {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(callbackFn, {xAxis:4, yAxis:4, orientation: 'N', xPosition: 0, yPosition: 0, directions: 'MM' });

  return (
    <form onSubmit={handleSubmit}>
    <label>
      X Axis:
      <input type="text" pattern="[0-9]*" name="xAxis" onChange={handleInputChange} value={inputs.xAxis}  />
    </label>
    <label>
      Y Axis:
      <input type="text" pattern="[0-9]*" name="yAxis" onChange={handleInputChange} value={inputs.yAxis} />
    </label>
    <label> 
      Orientation:
      <input type="text" name="orientation" onChange={handleInputChange} value={inputs.orientation} />
    </label>
    <label> 
      Starting X position:
      <input type="text" pattern="[0-9]*" name="xPosition" onChange={handleInputChange} value={inputs.xPosition} />
    </label>
    <label> 
      Starting Y position:
      <input type="text" pattern="[0-9]*" name="yPosition" onChange={handleInputChange} value={inputs.yPosition} />
    </label>
    <label>
      Directions:
      <input type="text" name="directions" onChange={handleInputChange} value={inputs.directions} />
    </label>
    <button type="submit">Start</button>
  </form>
  )
}