import { Button, Flex } from 'antd'
import React, { useMemo, useState } from 'react'

// ====================== 不使用 useMemo start ===================
// const usePow = (list: number[]) => {
//   return list.map((item) => {
//     console.log('usePow render')
//     return Math.pow(item, 2)
//   })
// }
// ====================== 不使用 useMemo end ===================

// ====================== 使用 useMemo start =================
const usePow = (list: number[]) => {
  return useMemo(() => {
    return list.map((item) => {
      console.log('usePow render')
      return Math.pow(item, 2)
    })
  }, [])
}

// ====================== 使用 useMemo end ===================

const Index: React.FC = () => {
  const [flag, setFlag] = useState<boolean>(true)
  console.log('Index render')

  const data = usePow([1, 2, 3])

  return (
    <>
      <div>数字集合：{JSON.stringify(data)}</div>
      <Flex>
        <Button type="primary" onClick={() => setFlag((v) => !v)}>
          切换 {flag + ''}
        </Button>
      </Flex>
    </>
  )
}

export default Index
