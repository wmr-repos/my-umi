// useLocalStorage自定义hook
import { useEffect, useState } from 'react'

export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (val: T) => void] => {
  // localStorage存的值
  const [storageVal, setStorageVal] = useState<T>(() => {
    // 读取localStorage的初始值
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error parsing localStorage key "${key}":`, error)
      return initialValue // 如果出错，返回初始值
    }
  })

  useEffect(() => {
    const item = window.localStorage.getItem(key)
    if (item) {
      try {
        setStorageVal(JSON.parse(item))
      } catch (error) {
        console.error(`Error parsing localStorage key "${key}":`, error)
      }
    }
  }, [key])

  const setVal = (val: T) => {
    setStorageVal(val)
    try {
      window.localStorage.setItem(key, JSON.stringify(val))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storageVal, setVal]
}

// 参考文档：https://www.alang.ai/nextjs/kbase/localstorage-hook
