import React, { useEffect, useState } from 'react'

const Index: React.FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count)
      setCount(count + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [count])
  return <>{count}</>
}

export default Index
