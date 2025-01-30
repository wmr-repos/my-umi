import React, { useEffect, useRef, useState } from 'react'

const queryData = async () => {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666)
    }, 2000)
  })
  console.log(data)

  return data
}

const Index: React.FC = () => {
  const [num, setNum] = useState(0)

  useEffect(() => {
    queryData().then((data) => {
      setNum(data)
    })
  }, [])

  return (
    <>
      <div onClick={() => setNum((num) => num + 1)}>{num}</div>
    </>
  )
}

export default Index
