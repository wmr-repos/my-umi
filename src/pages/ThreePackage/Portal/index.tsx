import { useEffect, useRef } from 'react'
import Portal from './components'

// ============================= 案例一 start ============================
// const Index = () => {
//   const content = (
//     <div className="btn">
//       <button>按钮</button>
//     </div>
//   )

//   return createPortal(content, document.body)
// }

// export default Index
// ============================= 案例一 end ============================

// ============================= 案例二 start ============================
const Index = () => {
  const containerRef = useRef<HTMLElement>(null)

  const content = (
    <div className="btn">
      <button>按钮按钮</button>
    </div>
  )

  useEffect(() => {
    console.log(containerRef);
  },[])

  return (
    <Portal attach={document.body} ref={containerRef}>
      {content}
    </Portal>
  )
}

export default Index

// ============================= 案例二 end ============================
