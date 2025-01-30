import React, { useEffect, useRef, useState } from 'react'

const Index: React.FC = () => {
  const [count, setCount] = useState(0)

  const updateCount = () => {
    console.log(count)
    setCount(count + 1)
  }

  const ref = useRef(updateCount)

  ref.current = updateCount

  useEffect(() => {
    setInterval(() => {
      ref.current()
    }, 1000)
  }, [])

  return <>{count}</>
}

export default Index
