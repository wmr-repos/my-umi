import React, { useDebugValue, useEffect, useState } from 'react'

// 自定义 Hook，用于获取当前的时间
function useCurrentTime() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // 使用 useDebugValue 传递调试信息
  useDebugValue(
    time ? `Current time: ${time.toLocaleTimeString()}` : 'Loading...',
  )

  return time
}

const Index: React.FC = () => {
  const time = useCurrentTime()

  return (
    <div>
      <h1>Current Time: {time.toLocaleTimeString()}</h1>
    </div>
  )
}

export default Index
