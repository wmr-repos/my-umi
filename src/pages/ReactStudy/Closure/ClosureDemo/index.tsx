import React, { useEffect, useState } from 'react'

const Index: React.FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      console.log(count)
      setCount(count + 1)
    }, 1000)
  }, [])
  return <>{count}</>
}

export default Index
