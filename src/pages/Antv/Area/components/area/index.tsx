import { Chart } from '@antv/g2'
import React, { useEffect, useState } from 'react'
import dataOrign from './data/data.json'
import { dataType } from './type'

const Area: React.FC = () => {
  const chart = new Chart({ container: 'container' })

  const [areaData, setAreaData] = useState<dataType[]>()

  useEffect(() => {
    if (dataOrign.length > 0) {
      setAreaData(dataOrign)
    }
  }, [])

  useEffect(() => {
    chart.options({
      type: 'view',
      autoFit: true,
      data: areaData,
      encode: { x: 'year', y: 'value', color: 'country' },
      axis: { x: { title: false }, y: { title: false } },
      children: [
        { type: 'area', style: { fillOpacity: 0.3 } },
        { type: 'line', style: { strokeWidth: 2 }, tooltip: false },
      ],
    })
    chart.render()
  }, [areaData])

  return <div id="container" style={{ width: '100%' }} />
}

export default Area
