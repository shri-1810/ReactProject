
import {useState} from 'react'
const Counter = () => {
    let [counter, setCounter] = useState(0)

    const handleIncrement=()=>{
        if (counter<20)
          setCounter(counter+1)
        else
          return
    }

    const handleDecrement=()=>{
        if (counter>0)
          setCounter(counter-1)
        else
          return

    }
    return(
        <>
        <h1>Current Value {counter}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}
export default Counter