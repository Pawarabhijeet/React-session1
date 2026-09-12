import {useState} from 'react'

const stateNumber= () => {
    const[count,setCount] = useState(0)

  const handleIncrement = () => {
      setCount(count+1)
  }

   const handleDecrement = () => {
      setCount(count-1)
  }

   const handleIncrementBy3= () => {
      // setCount(count+1)
      // setCount(count+1)
      // setCount(count+1)

      setCount((prev) => prev+1)
      setCount((prev) => prev+1)
      setCount((prev) => prev+1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleIncrementBy3}>+3</button>
    </div>
  )
}

export default stateNumber;