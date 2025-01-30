import { Reducer, useEffect, useReducer, useRef, useState } from 'react'

const Index: React.FC<any> = () => {
  const scrollRef = useRef<any>(null)
  const [clientHeight, setClientHeight] = useState<number>(0)
  const [scrollTop, setScrollTop] = useState<number>(0)
  const [scrollHeight, setScrollHeight] = useState<number>(0)

  const onScroll = () => {
    if (scrollRef?.current) {
      let clientHeight = scrollRef?.current.clientHeight //可视区域高度
      let scrollTop = scrollRef?.current.scrollTop //滚动条滚动高度
      let scrollHeight = scrollRef?.current.scrollHeight //滚动内容高度
      setClientHeight(clientHeight)
      setScrollTop(scrollTop)
      setScrollHeight(scrollHeight)
    }
  }

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  })

  const numRef = useRef<number>(0)
  const [_, forceRender] = useState(0)


  return (
    <>
      <p>案例一</p>
      <div>
        <p>可视区域高度：{clientHeight}</p>
        <p>滚动条滚动高度：{scrollTop}</p>
        <p>滚动内容高度：{scrollHeight}</p>
      </div>
      <div
        style={{ height: 200, border: '1px solid #000', overflowY: 'auto' }}
        ref={scrollRef}
        onScroll={onScroll}
      >
        <div style={{ height: 2000 }}></div>
      </div>
      <p>案例二</p>
      <div>
        <input ref={inputRef}></input>
      </div>
      <p>案例三</p>
      <div>
        <div
          onClick={() => {
            numRef.current += 1
            forceRender(Math.random())
          }}
        >
          {numRef.current}
        </div>
      </div>
    </>
  )
}

export default Index
