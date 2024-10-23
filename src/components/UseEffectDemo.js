import React, { useEffect, useState } from 'react'

// useEffect run on every variable change, props, state etc
const UseEffectDemo = () => {
    console.log('Render')
    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);

    // without any array [] it rerenders every time on refresh or on every state change
    // useEffect(() => {
    //     console.log('useEffect Render')
    // })

    
       // with this it runs only very first time
    //    useEffect(() => {
    //     console.log('useEffect Render')
    // },[])

    // with this it rerenders every times resourceType state change
    // Fetches the data from api and map the data to display
    useEffect(() => {
        console.log('useEffect Render')
    //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //   .then(response => response.json())
    //   .then(json => setItems(json))
    //   also console this data here

    // cleanup effect it runs first before useEffect to cleanup things
    return () => {
        console.log('Clean up resources')
    }

    },[resourceType])


  return (
    <div>
        <h1 style={{paddingTop: "30px"}}>UseEffectDemo</h1>
        <button onClick={() => setResourceType("posts")}>posts</button>
        <button onClick={() => setResourceType("users")}>users</button>
        <button onClick={() => setResourceType("comments")}>comments</button>
        <h1>{resourceType}</h1>
        {/* {items.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })} */}
    </div>
    
  )
}

export default UseEffectDemo