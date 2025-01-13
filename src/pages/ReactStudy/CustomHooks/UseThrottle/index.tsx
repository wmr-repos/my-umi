import useThrottle from '@/hooks/useThrottle'
import { Input } from 'antd'
import React, { useEffect, useState } from 'react'

// =========================== 不使用节流 start ===========================
// const Index: React.FC = () => {
//   const [val, setVal] = useState<string>('')

//   const onSearch = (value: string) => {
//     console.log(value)
//   }

//   useEffect(() => {
//     onSearch(val)
//   }, [val])

//   return (
//     <div>
//       <Input
//         placeholder="请输入"
//         value={val}
//         onChange={(e) => setVal(e.target.value)}
//         allowClear
//       />
//     </div>
//   )
// }
// =========================== 不使用节流 end ===========================

// =========================== 使用节流 start ===========================
const Index: React.FC = () => {
  const [val, setVal] = useState<string>('')

  const onSearch = (value: string) => {
    console.log(value)
  }

  const throttleFunc = useThrottle(onSearch, 1000)

  useEffect(() => {
    if (val) {
      throttleFunc(val)
    }
  }, [val, throttleFunc])

  return (
    <div>
      <Input
        placeholder="请输入"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        allowClear
      />
    </div>
  )
}
// =========================== 使用节流 end ===========================

export default Index
