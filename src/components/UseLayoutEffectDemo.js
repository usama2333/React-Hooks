import React, { useEffect, useState } from 'react'
import LayoutModel from './LayoutModel';

const UseLayoutEffectDemo = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count)
    },[count])

  return (
    <>
     <button onClick={() => setCount(c => c + 1)}>Increment</button>
     {/* <div>{count}</div> */}
     <LayoutModel/>

    </>
   
  )
}

export default UseLayoutEffectDemo
