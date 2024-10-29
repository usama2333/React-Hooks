import React, {useCallback, useState } from 'react'
import List from './List';

const UseCallbackDemo = () => {

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

// when the number change the function is recreated and runs the useEffect in List.js
// bcz it thinks the function change even on toggle theme

    // const getItems = () => {
    //     return [number, number + 1, number + 2]
    // }

    // with the callback it only runs on when function change
 const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    },[number])


    const theme =  {
    
             backgroundColor : dark ? '#333' : '#FFF',
             color: dark ? '#FFF' : '#333'
        }

  return (
    <div style={theme}>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <List getItems={getItems}/>
    </div>
  )
}

export default UseCallbackDemo

