import { useEffect, useState } from 'react'
import MutationObserve from './components/MutateObserver'

const Index = () => {
  const [className, setClassName] = useState('aaa')

  useEffect(() => {
    setTimeout(() => {
      setClassName('bbb')
    }, 2000)
  }, [])

  const callback = (mutationsList: MutationRecord[]) => {
    console.log(mutationsList)
  }
  return (
    <div>
      <MutationObserve onMutation={callback}>
        <div id="container">
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
      </MutationObserve>
    </div>
  )
}

export default Index
