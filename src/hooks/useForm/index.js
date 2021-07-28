import {useState} from 'react';

const useSignUpForm = (callback, defaultState) => {
  const [inputs, setInputs] = useState({...defaultState});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback(inputs);
  }

  const handleInputChange = (event) => {
    event.persist();
    let inputValue;

    if ((parseInt(event.target.value) || +event.target.value === 0) && event.target.value !== '') {
      inputValue = +event.target.value;
    } else {
      inputValue = event.target.value;
    }
    setInputs(inputs => ({...inputs, [event.target.name]: inputValue }));
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}
export default useSignUpForm;