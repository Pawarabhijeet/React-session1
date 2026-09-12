import React, { useState } from 'react';

const stateArray = () => {

  const [text, setText] = useState('');
  const [items, setItems] = useState(['React']);

  const handleAddItem =  () => {
    setItems((prev)=>[...prev,text])
  };

  return (
    <div>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={handleAddItem}>Add Text</button>
      <ul>
        {items.map((item, i)=>(
        <li key={i}>{item}</li>
      ))}
      </ul>
    </div>
  )
}

export default stateArray;