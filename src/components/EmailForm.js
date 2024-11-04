import React, { useId } from 'react'

const EmailForm = () => {
    // here this email component is used multiple times in parent component
    // and it has same id for all thats why if we click the lable of anyother email 
    // i will highlight the first email so we can use useId to make different ids

    const id = useId();
    // useId will generate a unique id for every render
    // here useId will generate a diffrent id for every email that is same for 
    // client side and server side
    // name lable with id will give us more secure way to differentiate which email is

  return (
    <div>
        {/* here we can use simple id or with any name attach with */}
        <label htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} type="email"  />

        <br />

        <label htmlFor={`${id}-name`}>Name</label>
        <input id={`${id}-name`} type="email"  />



      
    </div>
  )
}

export default EmailForm
