#### 闭包

useEffect 的依赖数组是[]，也就是只会执行并保留第一次的 function，而第一次的 function 引用当时的 count，形成闭包

```javascript
import React, { useEffect, useState } from 'react'

const Index: React.FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      console.log(count)
      setCount(count + 1)
    }, 1000)
  }, [])
  return <>{count}</>
}

export default Index
```

闭包：引入外部变量，导致函数的返回值不可预测<br> 在这个地方就是：effect 函数引用了 state，并没有把 state 的值夹到依赖数组里，导致 effect 执行时用的 state 还是之前的
