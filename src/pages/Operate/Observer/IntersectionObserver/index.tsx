import { useEffect } from 'react'
import './index.less'

const Index = () => {
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(entry.target, entry.intersectionRatio)
      })
    },
    {
      threshold: [0.5, 1],
    },
  )

  useEffect(() => {
    intersectionObserver.observe(document.getElementById('box1')!)
    intersectionObserver.observe(document.getElementById('box2')!)
  }, [])

  return (
    <div>
      <div id="box1">BOX111</div>
      <div id="box2">BOX222</div>
    </div>
  )
}

export default Index
