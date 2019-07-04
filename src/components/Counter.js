import React from 'react'

function Counter (props) {
  return <div>
    <button onClick={props.increment}>Increment</button>
    <button onClick={props.decrement}>Decrement</button>
    <span>{props.counter}</span>
  </div>
}

export default Counter