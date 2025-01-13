import { useCallback, useEffect, useRef } from 'react'

// useThrottle
type IProps<T extends (...args: any[]) => any> = {
  fn: T
  timer: ReturnType<typeof setTimeout> | null
}

const useThrottle = <T extends (...args: any[]) => void>(
  func: T,
  delay: number,
) => {
  const ref = useRef<IProps<T>>({ fn: func, timer: null })

  useEffect(() => {
    ref.current.fn = func
  }, [func])

  return useCallback(
    (...args: any[]) => {
      if (!ref.current.timer) {
        ref.current.timer = setTimeout(() => {
          ref.current.fn.call(this, ...args)
          ref.current.timer = null
        }, delay)
      }
    },
    [delay],
  )
}

export default useThrottle
