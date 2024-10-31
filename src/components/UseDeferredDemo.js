import React, { useState } from 'react'
import DeferredList from './DeferredList';

const UseDeferredDemo = () => {

    const [input, setInput] = useState("");

    function handleChange(e) {
        setInput(e.target.value)
    }

  return (
    <div>
        <input type="text" value={input} onChange={handleChange}/>
        {/* here we can send the input into deferred list component */}
        <DeferredList input={input}/>
    </div>
  )
}

export default UseDeferredDemo