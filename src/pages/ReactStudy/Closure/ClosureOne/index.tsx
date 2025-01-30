// ======================= 解法一 start =========================
// import React, { useEffect, useState } from 'react'

// const Index: React.FC = () => {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     setInterval(() => {
//       console.log(count)
//       setCount(count => count + 1)
//     }, 1000)
//   }, [])
//   return <>{count}</>
// }

// export default Index
// ======================= 解法一 end =========================

// ======================= 解法二 start =========================

import React, { Reducer, useEffect, useReducer } from 'react'

interface Action {
  type: 'add' | 'minus'
  num: number
}

function reducer(state: number, action: Action) {
  switch (action.type) {
    case 'add':
      return state + action.num
    case 'minus':
      return state - action.num
  }
  return state
}

const Index: React.FC = () => {
  const [count, dispatch] = useReducer<Reducer<number, Action>>(reducer, 0)

  useEffect(() => {
    setInterval(() => {
      console.log(count)
      dispatch({ type: 'add', num: 1 })
    }, 1000)
  }, [])
  return <>{count}</>
}

export default Index

// ======================= 解法二 end =========================
