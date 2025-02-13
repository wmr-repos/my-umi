import { useEffect } from 'react'
import './index.less'

const Index = () => {
  useEffect(() => {
    const box = document.getElementById('box')!

    setTimeout(() => {
      box.style.width = '200px'
    }, 3000)

    const observer = new ResizeObserver((entries) => {
      console.log(entries)
    })

    observer.observe(box)
  }, [])

  return <div id="box"></div>
}

export default Index
