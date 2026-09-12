// onClick = responding to a click
// camelCase prop = onClick, onMouseEnter

import React from 'react';

function onClickBasics() {
    const handleClick1 = () =>{
        console.log("Button1 Clicked")
        alert("Hello World")
    }

    const handleClick2 = (user) =>{
        console.log("Button2 Clicked")
        alert(`Hello ${user}`)
    }

  return(
    <>
    {/* Named Handler */}
    <button onClick={handleClick1}>Click1</button>
    <button onClick={() => handleClick2("John")}>Click2</button>
    </>
  )

}

export default onClickBasics;