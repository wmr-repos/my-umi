import React, { lazy, Suspense } from 'react'

const LazyAaa = lazy(() => import('./components'))

const Index: React.FC = () => {
  return (
    <div>
      <Suspense fallback={'loading...'}>
        <LazyAaa></LazyAaa>
      </Suspense>
    </div>
  )
}

export default Index
