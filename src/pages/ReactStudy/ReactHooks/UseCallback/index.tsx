// import { Button, Flex } from 'antd'
// import React, { memo, useCallback, useState } from 'react'

import { memo, useCallback, useEffect, useMemo, useState } from 'react'

// ================================= 案例一 start ============================

// type IProps = {
//   children: string
//   onClick: () => void
// }

// const TestButton: React.FC<IProps> = memo(
//   ({ children, onClick = () => {} }) => {
//     console.log(children)
//     return (
//       <Flex>
//         <Button type="primary" onClick={onClick}>
//           {children}
//         </Button>
//       </Flex>
//     )
//   },
// )

// const Index: React.FC = () => {
//   const [count, setCount] = useState(0)
//   const [flag, setFlag] = useState(false)

//   const add = useCallback(() => {
//     setCount((val) => val + 1)
//   }, [count])

//   return (
//     <>
//       <TestButton onClick={() => setCount(count + 1)}>普通点击</TestButton>
//       <TestButton onClick={add}>useCallback点击</TestButton>
//       <div>数字：{count}</div>
//       <Flex>
//         <Button type="primary" onClick={() => setFlag((v) => !v)}>
//           切换{flag + ''}
//         </Button>
//       </Flex>
//     </>
//   )
// }

// export default Index
// ================================= 案例一 end ============================

// ================================= 案例二 start ============================
function Aaa() {
  const [_, setNum] = useState(1)

  const [count, setCount] = useState(2)

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random())
    }, 2000)
  }, [])

  const bbbCallback = useCallback(() => {
    console.log('bbbCallback')
  }, [])

  const count2 = useMemo(() => {
    return count * 10
  }, [count])

  return (
    <div>
      <MemoBbb count={count2} callback={bbbCallback}></MemoBbb>
    </div>
  )
}

interface BbbProps {
  count: number
  callback: Function
}

function Bbb(props: BbbProps) {
  console.log('bbb render')
  return <h2>{props.count}</h2>
}

const MemoBbb = memo(Bbb)

export default Aaa
// ================================= 案例二 end ============================
