// MutateObserver 封装了ref的获取
import React, { useLayoutEffect, useRef, useState } from 'react'
import useMutateObserver from '../hooks/useMutateObserver'

interface MutationObserverProps {
  options?: MutationObserverInit
  onMutation?: (mutations: MutationRecord[], observer: MutationObserver) => void
  children: React.ReactElement
}

const MutationObserve: React.FC<MutationObserverProps> = (props) => {
  const { options, onMutation = () => {}, children } = props

  const elementRef = useRef<HTMLElement>(null)

  const [target, setTarget] = useState<HTMLElement>()

  useMutateObserver(target!, onMutation, options)

  useLayoutEffect(() => {
    setTarget(elementRef.current!)
  }, [])

  if (!children) {
    return null
  }

  return React.cloneElement(children, { ref: elementRef })
}

export default MutationObserve
