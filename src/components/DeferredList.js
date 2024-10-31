import React, { useDeferredValue, useEffect, useMemo } from 'react'

const DeferredList = ({ input }) => {

    const LIST_SIZE = 20000;

    // useDeferred hook works same as useTransition for that part of code that takes to much time to execute
    // we have a input field when user enter any character the whole loop runs that takes some time
    // with deferred it can delay in milliseconds then the useMemo runs the loop
    // like if user enter in 
    // input : u 
    // deferedInput : 
    // input : us 
    // deferedInput :u
        // input : usa 
    // deferedInput :us
    // like that it does not runs imediately it detalys some time for input like user complete it then it rerenders the useMemo 

    // if user enter all works in one go like
    // input : usama 
    // deferedInput :
    // then after some milliseconds delay deferedVlaue it updated and component rerendered
    const deferredInput = useDeferredValue(input);
    // deferredInput updated after some milliseconds delay

    // UseDeferred makes some delay in input thats way the list is not computed on every click
    // when its completes its milliseconds times the the component rerenders as useMemo value changes
   const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
        l.push(<div key={i}>{deferredInput}</div>)
    }
    return l
   },[deferredInput])
   
   useEffect(() => {
    // here in console we also shows that deferredInput updated after some milliseconds delay
    console.log(`Input ${input}  \n Deferred ${deferredInput}`)
   },[input, deferredInput])


    return list
}

export default DeferredList
