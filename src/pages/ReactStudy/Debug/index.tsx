import { useLayoutEffect, useState } from 'react'

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666)
    }, 2000)
  })
  return data
}

const Index: React.FC = () => {
  const [num, setNum] = useState(0)

  useLayoutEffect(() => {
    queryData().then((data) => {
      setNum(data)
    })
  }, [])

  return (
    <div
      onClick={(e) => {
        setNum((preNum) => preNum + 1)
      }}
    >
      {num}
    </div>
  )
}

export default Index
