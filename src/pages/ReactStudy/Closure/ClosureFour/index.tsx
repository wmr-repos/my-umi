import React, { useState } from 'react'
import useInterval from './useInterval'

const Index: React.FC = () => {
  const [count, setCount] = useState(0)

  const updateCount = () => {
    console.log(count)
    setCount(count + 1)
  }

  useInterval(updateCount, 1000)

  return <>{count}</>
}

export default Index
