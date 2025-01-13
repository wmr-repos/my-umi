import { Button, Flex } from 'antd'
import React, { useReducer } from 'react'

// ========================= useState实现 start ========================
// const Index: React.FC = () => {
//   const [count, setCount] = useState(0)
//   return (
//     <>
//       <p> count: {count}</p>
//       <Flex gap={10}>
//         <Button type="primary" onClick={() => setCount(count + 1)}>
//           加一
//         </Button>
//         <Button type="primary" onClick={() => setCount(count - 1)}>
//           减一
//         </Button>
//       </Flex>
//     </>
//   )
// }
// ========================= useState实现 end ========================

// ========================= useReducer实现 start ========================
// const Index: React.FC = () => {
//   const reducer = (state: number, action: any) => {
//     switch (action.type) {
//       case 'add':
//         return state + action.payload
//       case 'desc':
//         return state - action.payload
//       default:
//         return state
//     }
//   }
//   const [count, dispatch] = useReducer(reducer, 0)
//   return (
//     <>
//       <p> count: {count}</p>
//       <Flex gap={10}>
//         <Button
//           type="primary"
//           onClick={() => dispatch({ type: 'add', payload: 1 })}
//         >
//           加一
//         </Button>
//         <Button
//           type="primary"
//           onClick={() => dispatch({ type: 'desc', payload: 1 })}
//         >
//           减一
//         </Button>
//       </Flex>
//     </>
//   )
// }
// ========================= useReducer实现 end ========================

// ===================带有无关按钮时 start ===================
type IProps = {
  count: number
}
const Child: React.FC<IProps> = ({ count }) => {
  console.log('子组件重新渲染了')
  return <p>子组件: {count}</p>
}

const Index: React.FC = () => {
  console.log('Index组件重新渲染了')

  const reducer = (state: number, action: any) => {
    switch (action.type) {
      case 'add':
        return state + action.payload
      case 'desc':
        return state - action.payload
      default:
        return state
    }
  }
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <>
      <p> count: {count}</p>
      <Flex gap={10}>
        <Button
          type="primary"
          onClick={() => dispatch({ type: 'add', payload: 1 })}
        >
          加一
        </Button>
        <Button
          type="primary"
          onClick={() => dispatch({ type: 'desc', payload: 1 })}
        >
          减一
        </Button>
        <Button
          type="primary"
          onClick={() => dispatch({ type: 'no', payload: 1 })}
        >
          无关按钮
        </Button>
      </Flex>
      <Child count={count} />
    </>
  )
}

// ===================带有无关按钮时 end ===================

export default Index
