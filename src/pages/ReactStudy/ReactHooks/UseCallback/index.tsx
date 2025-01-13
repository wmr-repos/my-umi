import { Button, Flex } from 'antd'
import React, { memo, useCallback, useState } from 'react'

type IProps = {
  children: string
  onClick: () => void
}

const TestButton: React.FC<IProps> = memo(
  ({ children, onClick = () => {} }) => {
    console.log(children)
    return (
      <Flex>
        <Button type="primary" onClick={onClick}>
          {children}
        </Button>
      </Flex>
    )
  },
)

const Index: React.FC = () => {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  const add = useCallback(() => {
    setCount((val) => val + 1)
  }, [count])

  return (
    <>
      <TestButton onClick={() => setCount(count + 1)}>普通点击</TestButton>
      <TestButton onClick={add}>useCallback点击</TestButton>
      <div>数字：{count}</div>
      <Flex>
        <Button type="primary" onClick={() => setFlag((v) => !v)}>
          切换{flag + ''}
        </Button>
      </Flex>
    </>
  )
}

export default Index
