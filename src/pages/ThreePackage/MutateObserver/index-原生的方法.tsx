import { useEffect, useRef, useState } from 'react'

const Index = () => {
  const [className, setClassName] = useState('aaa')

  useEffect(() => {
    setTimeout(() => {
      setClassName('bbb')
    }, 2000)
  }, [])

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const targetNode = containerRef.current!

    const callback = (mutationsList: MutationRecord[]) => {
      console.log(mutationsList)
    }

    const observer = new MutationObserver(callback)

    observer.observe(targetNode, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['className'],
    })
  }, [])

  return (
    <>
      <div ref={containerRef}>
        <div className={className}>
          {className === 'aaa' ? (
            <div>aaa</div>
          ) : (
            <div>
              <p>bbb</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Index
