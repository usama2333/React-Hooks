import React, { useState } from 'react'

const UseStateDemo = () => {

    function countInitial() {
        console.log('USe state function')
        return 4;
    }

    // if we pass the state like that then it will assign value on every render or refresh
    const [count, setCount] = useState(4);

    // with this function version it only runs very first only
    // console shows only one time even refresh or state change
    // const [count, setCount] = useState(() => {
    //     console.log('USe state function')
    //     return 4;
    // });

    // on this way function runs on every render on state change or page refresh
    // const [count, setCount] = useState(countInitial())

    // with this function version approach it only runs very first time only
    // const [count, setCount] = useState(() => countInitial())

    function decrementCount() {
        // with this approach when we use setCount 2 times then it only updates the
        // data only single time
        // setCount(count - 1)
        // setCount(count - 1)

        // This way takes latest state and perform accurate operations 
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

  return (
    <div>
    <h1>Hello world</h1>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
     <button onClick={incrementCount}>+</button>
     </div>
  )
}

export default UseStateDemo