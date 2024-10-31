import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const LayoutModel = () => {

    const [show, setShow] = useState(false);

    const popup = useRef();
    const button = useRef();

    // useEffect
    // Runs asynchronously after the browser has finished painting, meaning it runs after the DOM updates and renders are completed.
    // Ideal for side effects that don’t need to block or delay the visual update, such as data fetching, logging, or setting up subscriptions.

    // useLayoutEffect
    //  Runs synchronously after React has calculated the DOM updates but before the browser has painted.
    //  It essentially blocks the paint until it’s done executing.
    //  Useful for side effects that need to manipulate or read layout properties 
    //from the DOM, such as measuring element sizes or synchronizing animations.

    // it means that useLayoutEffect can run syncronously in between when react calculated the dom
    // and before the browser has paint
    
    // in short it runs before useEffect

    useLayoutEffect(() => {
        if(popup.current == null || button.current == null) return;

        const {bottom} = button.current.getBoundingClientRect();
        popup.current.style.top = `${bottom + 25}px`
    },[show])

  return (
    <div>
      <button ref={button} onClick={() => setShow(prev => !prev)}>Click here</button>
      {show && (
       <div style={{position: 'absolute'}} ref={popup}>
        This is popup
       </div>
      )}
    </div>
  )
}

export default LayoutModel
