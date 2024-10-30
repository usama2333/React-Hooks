import React, { useReducer } from 'react';

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

// here reducer is a function that can take to parameters the first is state that is current state
// and the second is action which shows which action is dispatch
// and it returns new object with some functionality
function reducer(state, action) {
  if(action.type == ACTIONS.INCREMENT) {
    return {count: state.count + 1};
  }
  if(action.type == ACTIONS.DECREMENT) {
    return {count: state.count - 1};
  }
}

const UseReducerDemo = () => {
    // here we state is current state that is count:0 is stored in state
    // with dispatch we can dispatch actions in the form of type like increment or decrement 
    //to our reducer function
    
    const [state, dispatch] = useReducer(reducer, {count: 0});

    function increment() {
        dispatch({type: ACTIONS.INCREMENT})
    }
    function decrement() {
        dispatch({type: ACTIONS.DECREMENT})
    }
  return (
    <div>
        <button onClick={decrement}>-</button>
        {state.count}
        <button onClick={increment}>+</button>
      
    </div>
  )
}

export default UseReducerDemo
