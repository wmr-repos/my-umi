import { useEffect } from 'react'

const Index = () => {
  useEffect(() => {
    // deprecation  和 intervention 不好模拟就不模拟了，intervention 可以查看 https://chromestatus.com/features#intervention
    const reportingObserver = new ReportingObserver(
      (reports, observer) => {
        for (const report of reports) {
          console.log(report.body)
        }
      },
      { types: ['intervention', 'deprecation'] },
    )

    reportingObserver.observe()
  }, [])
  return (
    <div>
      <h1>Index</h1>
    </div>
  )
}

export default Index
