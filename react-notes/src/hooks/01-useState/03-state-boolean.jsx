import React, { useState } from 'react'

const stateBoolean = () => {

  const[toggle,setToggle]=useState(false)

  const handleClick = () =>{
    setToggle((prev)=>!prev)
  }

  return (
    <div>
      <button onClick={handleClick}>{toggle ? "Turn Off" : "Turn on"}</button>
      <p>{toggle? "laptop is on" : "laptop is Off"}</p>
    </div>
  )
}

export default stateBoolean;