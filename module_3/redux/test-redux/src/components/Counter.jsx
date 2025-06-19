import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}

export default Counter