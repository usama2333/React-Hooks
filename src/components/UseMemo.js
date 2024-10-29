import React, { useEffect, useMemo, useState } from 'react'
// use case of use memo
// 1 for slow function that slow down code
// 2 works as for reference for objects and array 

// This is a slow function that can slow down the code like 1 sec delay
function slowFunction(num) {
    console.log('This is slow function');
    for(let i = 0; i < 1000000000; i++) {}
    return num * 2
}

const UseMemo = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // here even when every state change the slow function also runs that slow
    // down the code so we apply useMemo that can memorize the value the slow
    // function only runs when its number change

    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    },[number]);

    // by applying useMemo on this it can only runs useffect when dark value is changed
    const themeStyles = useMemo(() => {
        return {
             backgroundColor : dark ? 'black' : 'white',
             color: dark ? 'white' : 'black'
        }
    },[dark]) 

    // without useMemo the useEffect runs even when input value changes
    // bcz when the component load the object is created with new reference
    // with useMemo it stores the reference or check the value 
    
    useEffect(() => {
        console.log('Theme styles changes')
    },[themeStyles])
  return (
    <div>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

export default UseMemo
