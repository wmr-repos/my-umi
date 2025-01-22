// 封装useControllableValue
import { SetStateAction, useCallback, useRef, useState } from 'react'

type Props<T> = {
  defaultValue?: T
  value?: T
  onChange?: (e: T) => void
}

function useControllableValue<T>(
  props: Props<T>,
): [T, (v: SetStateAction<T>) => void] {
  const { value, defaultValue, onChange } = props
  const isControllable = value !== undefined
  const newValue = value ?? defaultValue ?? ''

  const [_, setState] = useState<T>(newValue as T) // 确保在状态变化时正确地触发重新渲染，同时在需要时访问最新的值。

  const ref = useRef<T>(newValue as T)

  if (isControllable) {
    ref.current = value as T
  }

  useCallback(() => {
    if (isControllable) {
      setState(value as T)
    }
  }, [value, isControllable])

  const setValue = (v: SetStateAction<T>) => {
    const t = typeof v === 'function' ? (v as Function)(ref.current) : v

    if (!isControllable) {
      ref.current = t
      setState(t)
    }

    onChange && onChange(t)
  }

  return [ref.current, setValue]
}

export { useControllableValue }
