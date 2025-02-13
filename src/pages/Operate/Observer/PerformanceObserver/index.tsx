import { useEffect } from 'react'

const Index = () => {
  function measureClick() {
    performance.measure('button clicked')
  }

  useEffect(() => {
    const performanceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // console.log(entry) // 上报
      })
    })

    performanceObserver.observe({
      entryTypes: ['resource', 'mark', 'measure'],
    })

    performance.mark('registered-observer')
  }, [])

  return <button onClick={measureClick}>Measure</button>
}

export default Index
