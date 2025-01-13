import { Button } from 'antd'
import { useState } from 'react'

const Child = ({ getNumber }) => {
  const [number, setNumber] = useState<number>(0)
  return (
    <>
      <div style={{ border: '1px solid #000', padding: '10px' }}>
        <div>子组件</div>
        <Button
          type="primary"
          onClick={() => {
            setNumber(number + 1)
            getNumber(number + 1)
          }}
        >
          点击加一{number}
        </Button>
      </div>
    </>
  )
}

export default () => {
  const [number, setNumber] = useState<number>()

  return (
    <>
      <h3>子传父</h3>
      <div>我是父组件</div>
      <div>子组件的number：{number}</div>
      <Child
        getNumber={(value: number) => {
          setNumber(value)
        }}
      >
        大家好
      </Child>
    </>
  )
}
