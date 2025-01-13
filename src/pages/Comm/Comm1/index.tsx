import React, { useEffect, useImperativeHandle, useRef } from 'react'

interface RefProps {
  aaa: () => void
}

const Guang: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(
    ref,
    () => {
      return {
        aaa() {
          inputRef.current?.focus()
        },
      }
    },
    [inputRef],
  )

  return (
    <div>
      <input ref={inputRef}></input>
    </div>
  )
}

const WrapedGuang = React.forwardRef(Guang)

function Comm() {
  const ref = useRef<RefProps>(null)

  useEffect(() => {
    console.log('ref', ref.current)
    ref.current?.aaa()
  }, [])

  return (
    <div className="App">
      <WrapedGuang ref={ref} />
    </div>
  )
}

export default Comm
