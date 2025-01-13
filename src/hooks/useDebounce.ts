// =========================== 写法一 start ==========================
// import { useCallback, useEffect, useRef } from 'react'
// interface DebounceRef {
//   fn: (...args: any[]) => void
//   timer: ReturnType<typeof setTimeout> | null
// }
// const useDebounce = (func: any, delay = 500) => {
//   const { current } = useRef<DebounceRef>({ fn: func, timer: null })

//   useEffect(() => {
//     current.fn = func
//   }, [func])

//   return useCallback(
//     (...args: []) => {
//       if (current.timer) {
//         clearTimeout(current.timer)
//       }
//       current.timer = setTimeout(() => {
//         current.fn.call(this, ...args)
//       }, delay)
//     },
//     [delay],
//   )
// }
// =========================== 写法一 end ==========================

// =========================== 写法二 start ==========================
import { useCallback, useEffect, useRef } from 'react'

interface DebounceRef<T extends (...args: any[]) => any> {
  fn: T
  timer: ReturnType<typeof setTimeout> | null
}

const useDebounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
) => {
  const ref = useRef<DebounceRef<T>>({ fn: func, timer: null })

  useEffect(() => {
    ref.current.fn = func
  }, [func])

  // 每次组件的渲染都会重新渲染hook，所以需要使用useCallback
  // Parameters<T> 获取的是func的参数类型
  const debouncedFunc = useCallback(
    (...args: Parameters<T>) => {
      if (ref.current.timer) {
        clearTimeout(ref.current.timer)
      }

      ref.current.timer = setTimeout(() => {
        ref.current.fn(...args)
      }, delay)
    },
    [delay],
  )

  useEffect(() => {
    return () => {
      if (ref.current.timer) {
        clearTimeout(ref.current.timer)
      }
    }
  })

  return debouncedFunc
}

// =========================== 写法二 end ==========================
export default useDebounce
