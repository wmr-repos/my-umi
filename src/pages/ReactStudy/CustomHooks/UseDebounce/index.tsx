import useDebounce from '@/hooks/useDebounce'
import { Input } from 'antd'
import React, { useEffect, useState } from 'react'

// ========================= 不实用防抖 start =========================
// const Index: React.FC = () => {
//   const [val, setVal] = useState('')

//   const onSearch = (val: string) => {
//     console.log(val)
//   }

//   // 当 val 发生变化时，请求搜索数据
//   useEffect(() => {
//     onSearch(val)
//   }, [val])

//   return (
//     <div className="App">
//       <Input
//         value={val}
//         placeholder="请输入"
//         onChange={(e) => setVal(e.target.value)}
//         allowClear
//       />
//     </div>
//   )
// }
// ========================= 不实用防抖 end =========================

// ========================= 使用防抖写法一 start =========================
// const Index: React.FC = () => {
//   const [val, setVal] = useState('')

//   // 搜索函数
//   const onSearch = (searchTerm: string) => {
//     console.log('搜索:', searchTerm)
//   }

//   const debouncedSearch = useDebounce(() => {
//     onSearch(val)
//   }, 500)

//   useEffect(() => {
//     if (val) {
//       debouncedSearch()
//     }
//   }, [val, debouncedSearch])

//   return (
//     <div className="App">
//       <Input
//         value={val}
//         placeholder="请输入"
//         onChange={(e) => setVal(e.target.value)}
//         allowClear
//       />
//     </div>
//   )
// }
// ========================= 使用防抖写法一 end =========================

// ========================= 使用防抖写法二 start =========================
const Index: React.FC = () => {
  const [val, setVal] = useState('')

  // 搜索函数
  const onSearch = (searchTerm: string) => {
    console.log('搜索:', searchTerm)
  }

  const debouncedSearch = useDebounce((searchTerm: string) => {
    onSearch(searchTerm)
  }, 500)

  useEffect(() => {
    if (val) {
      debouncedSearch(val)
    }
  }, [val, debouncedSearch])

  return (
    <div>
      <Input
        value={val}
        placeholder="请输入"
        onChange={(e) => setVal(e.target.value)}
        allowClear
      />
    </div>
  )
}
// ========================= 使用防抖写法二 end =========================

export default Index
