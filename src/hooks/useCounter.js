import { useState } from 'react';

const useCounter = (initial) => {
  const [counter, setCounter] = useState(initial);

  const increment = () => {
    setCounter(counter +1);
  }

  const reset = () => {
    setCounter(initial);
  }

  return[
    counter,
    increment,
    reset
  ]
}

export default useCounter;