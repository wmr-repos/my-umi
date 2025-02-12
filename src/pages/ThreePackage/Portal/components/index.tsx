import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react'
import { createPortal } from 'react-dom'

interface ProtalProps {
  attach?: HTMLElement | string
  children?: React.ReactNode
}

export const getAttach = (attach: HTMLElement | string) => {
  if (typeof attach === 'string') {
    return document.querySelector(attach)
  }
  if (typeof attach === 'object' && attach instanceof window.HTMLElement) {
    return attach
  }

  return document.body
}

const Portal = forwardRef((props: ProtalProps, ref) => {
  const { attach = document.body, children } = props

  const container = useMemo(() => {
    const el = document.createElement('div')
    el.className = 'portal_wapper'
    return el
  }, [])

  useEffect(() => {
    const parentAttach = getAttach(attach)
    parentAttach?.appendChild(container)

    return () => {
      parentAttach?.removeChild(container)
    }
  }, [container, attach])

  useImperativeHandle(ref, () => container)

  return createPortal(children, container)
})

export default Portal
