import React, { useState, useTransition } from 'react'

const UseTransition = () => {

    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    // useTransition hook is used for that items that takes to time and slow downs the render
    // It is used to make less preriority for something how makes render slower
  // here isPending shows works as loading state
//   startTransition will get the complete result and then render the component

    const [isPending, startTransition] = useTransition();

    const LIST_SIZE = 20000

     function handleChange(e) {
        setInput(e.target.value);

        // here setInput() and setList() both have high priority and the component is 
        // render when both to the states gets data but setList() is to slow that why
        // it blocks for somw time then rendered the component

        // const l = [];
        // for(let i = 0; i < LIST_SIZE; i++) {
        //     l.push(e.target.value)
        // }
        // setList(l)

        // by using the startTransition we make setList() as low preriority and it runs on backend
        // and the setInput() runs first and render the component when setList()
        // is completed it again rerendered the component and data is updated

        startTransition(() => {
        const l = [];
        for(let i = 0; i < LIST_SIZE; i++) {
            l.push(e.target.value)
        }
        setList(l)
        })

    }

  return (
    <div>
      <input type='text' value={input} onChange={handleChange}/>

      {/* here isPending is used to display some message while the data is not fully completed */}
      
      {isPending ? "Loading...." : 
      list.map((item,index) => {
        return  <div key={index}>{item}</div>
       })
      }
      
    </div>
  )
}

export default UseTransition
