import React from 'react'

function EventObject() {
    const handleClick = (e) =>{
        console.log("Event Object", e)
        console.log("button text ", e.target.textContent)
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
        console.log("form submitted")
    }

  return (
    <>
    <button onClick={handleClick}>Inspect this button</button>

    <form onSubmit={handleSubmit}>
        <input type='text'/>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default EventObject;