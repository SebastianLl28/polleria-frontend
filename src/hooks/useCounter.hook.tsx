import { useState } from 'react'

const useCounter = (initialCount = 1) => {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(count + 1)
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return { count, increment, decrement, setCount }
}

export default useCounter
