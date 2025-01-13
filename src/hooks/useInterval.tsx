import { useCallback, useEffect, useRef } from 'react'

export const useInterval = (fn: any, delay: number) => {
  const ref = useRef()

  // 保证每次fn的引用都是最新的
  ref.current = fn

  const cleanUpFnRef = useRef<Function>()

  const clear = useCallback(() => {
    cleanUpFnRef.current?.()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      ref.current()
    }, delay)

    cleanUpFnRef.current = () => {
      clearInterval(interval)
    }

    return clear
  }, [])
}
