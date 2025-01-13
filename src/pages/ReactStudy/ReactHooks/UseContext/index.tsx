import { Button, Flex } from 'antd'
import { createContext, useContext, useState } from 'react'

const CountContext = createContext(-1)

const Son = () => {
  const count = useContext(CountContext)

  return <div style={{ marginTop: 10 }}>孙组件获取到的count: {count}</div>
}

const Child = () => {
  const count = useContext(CountContext)

  return (
    <div style={{ marginTop: 10 }}>
      子组件获取到的count: {count}
      <Son />
    </div>
  )
}

const Index: React.FC<any> = () => {
  let [count, setCount] = useState(0)

  return (
    <>
      <div>父组件中的count：{count}</div>
      <Flex>
        <Button type="primary" onClick={() => setCount((v) => v + 1)}>
          点击+1
        </Button>
      </Flex>
      <CountContext.Provider value={count}>
        <Child />
      </CountContext.Provider>
    </>
  )
}

export default Index
