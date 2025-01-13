import { Button, Flex } from 'antd'
import { useState } from 'react'

const Index: React.FC<any> = () => {
  const [state, setState] = useState({ number: 0 })
  let [count, setCount] = useState(0)

  return (
    <>
      <div>数字形式：{count}</div>
      <Flex>
        <Button
          type="primary"
          onClick={() => {
            count++
            setCount(count)
          }}
        >
          点击+1
        </Button>
      </Flex>
      <div>对象形式：{state.number}</div>
      <Flex>
        <Button
          type="primary"
          onClick={() => {
            state.number++
            setState(state)
          }}
        >
          点击+1
        </Button>
      </Flex>
    </>
  )
}

export default Index
