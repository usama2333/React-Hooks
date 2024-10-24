import React, { useEffect, useRef, useState } from 'react'

const UseRefDemo = () => {

    const [name, setName] = useState("");
    // useRef can be access as renderCount.current the current doesnot update the dom
    // its does not render the component if its value is updated 
    const renderCount = useRef(1);
    const prevName = useRef("");

    useEffect(() => {
        // if we use useState here then we get infinite render loop due to state changes
        // with the help of useRef we useEffect is not run and not rerendered again and again
        renderCount.current = renderCount.current + 1;

        // it also store the prev state value bcz it doesnot cause component render
        // thats why it contains prev value 
        prevName.current = name
    },[name])

  return (
    <div>
        {/* we also use the useRef on input fields to directly acces the value without updating the dom */}
        <input value={name} onChange={e => setName(e.target.value)} />
        <div>My name is {name} and is used to be {prevName.current}</div>
        <div>I rendered {renderCount.current} times</div>
      
    </div>
  )
}

export default UseRefDemo
