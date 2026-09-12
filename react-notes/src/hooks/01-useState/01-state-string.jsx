import React, { useState } from 'react'

const stateString = () => {

    const [text, stateText] = useState("John")

    const handleChange = (e) =>{
        console.log(e.target.value)
        stateText(e.target.value)

    }
  return (
    <div>
        <input type='text' onChange={handleChange} value={text}/>
        <p>Text : {text}</p>
        <p>Text characters : {text.length}</p>
    </div>
  )
}

export default stateString;