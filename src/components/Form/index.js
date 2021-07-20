import useSignUpForm from '../../hooks/useForm/index';

export default function Form ({callbackFn}) {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(callbackFn);

  return (
    <form onSubmit={handleSubmit}>
    <label>
      X Axis:
      <input type="number" name="xAxis" onChange={handleInputChange} value={inputs.xAxis || ''}  />
    </label>
    <label>
      Y Axis:
      <input type="number" name="yAxis" onChange={handleInputChange} value={inputs.yAxis || ''} />
    </label>
    <label> 
      Orientation:
      <input type="text" name="orientation" onChange={handleInputChange} value={inputs.orientation || ''} />
    </label>
    <label>
      Directions:
      <input type="text" name="directions" onChange={handleInputChange} value={inputs.directions || ''} />
    </label>
    <button type="submit">Start</button>
  </form>
  )
}