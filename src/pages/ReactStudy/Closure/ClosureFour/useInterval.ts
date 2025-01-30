import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'

const useInterval = (fn: Function, delay?: number | null) => {
  const callbackFn = useRef(fn)

  useLayoutEffect(() => {
    callbackFn.current = fn
  })

  let clearUpFnRef = useRef<Function>()
  const clean = useCallback(() => {
    clearUpFnRef.current?.()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      callbackFn.current()
    }, delay || 0)

    clearUpFnRef.current = () => {
      clearInterval(timer)
    }

    return clean
  }, [])

  return clean
}

export default useInterval

// 为什么要用useCallback包裹返回的函数？
// 因为这个返回的函数可能作为参数传入别的组件，这样用useCallback包裹就可以避免该参数的变化，配合memo可以起到减少不必要渲染的效果
