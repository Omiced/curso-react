import PropTypes from "prop-types";
import { useState } from "react";
export const CounterApp = ({value}) => {
  const handleAdd = () => setCounter(counter + 1) ;
  const handleSubtract = () => setCounter(counter - 1) ;
  const handleReset = () => setCounter(value) ;
  const [counter, setCounter] = useState(value);
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd }>+1</button>
      <button onClick={handleSubtract }>-1</button>
      <button onClick={handleReset }>Reset</button>
    </>
  )
}

CounterApp.protoTypes = {
  value : PropTypes.number.isRequired
}