import { useEffect } from 'react'
import './index.less'

const Index = () => {
  useEffect(() => {
    const box = document.getElementById('box')!

    const observer = new MutationObserver((mutationsList) => {
      console.log(mutationsList)
    })

    observer.observe(box, { attributes: true, childList: true })

    setTimeout(() => {
      box.style.background = 'red'
    }, 2000)

    setTimeout(() => {
      const btn = document.createElement('button')
      btn.innerText = '按钮二'
      box.appendChild(btn)
    }, 3000)

    setTimeout(() => {
      box.querySelectorAll('button')[0].remove()
    }, 5000)
  }, [])

  return (
    <div id="box">
      <button>按钮一</button>
    </div>
  )
}

export default Index
