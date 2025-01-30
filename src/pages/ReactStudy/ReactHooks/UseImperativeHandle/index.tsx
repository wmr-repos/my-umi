import { Button, Flex } from 'antd'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

interface ChildRef {
  add: () => void
}

interface ChildProps {}

const Child = forwardRef<ChildRef, ChildProps>((props, cref) => {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount((prevCount) => prevCount + 1)
  }

  // 使用 useImperativeHandle 自定义暴露给父组件的方法
  // 这里暴露的 add 方法应该作为一个对象返回
  useImperativeHandle(cref, () => ({ add }))

  return (
    <>
      <div>我是子组件</div>
      <p>count： {count}</p>
      <Flex>
        <Button type="primary" onClick={() => add()}>
          子组件的按钮点击加一
        </Button>
      </Flex>
    </>
  )
})

const Index: React.FC = () => {
  const ref = useRef<ChildRef>(null)

  return (
    <>
      <Flex>
        <Button type="primary" onClick={() => ref.current?.add()}>
          父组件上的按钮，点击加一
        </Button>
      </Flex>
      <Child ref={ref} />
    </>
  )
}

export default Index
