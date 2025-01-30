import dayjs from 'dayjs'
import React, { useState } from 'react'
import { Calendar } from './components'

// ================================= 非受控模式 start ========================
// const Index: React.FC = () => {
//   return (
//     <Calendar
//       defaultValue={dayjs('2025-1-30')}
//       className={'aaa'}
//       // style={{ backgroundColor: 'yellow' }}
//       dateInnerContent={(value) => {
//         return (
//           <div>
//             <p>{value.format('YYYY/MM/DD')}</p>
//           </div>
//         )
//       }}
//       // locale='en-US'
//     />
//   )
// }

// export default Index
// ================================= 非受控模式 end ========================

// ================================= 受控模式 start ========================
const Index: React.FC = () => {
  const [value, setValue] = useState(dayjs('2023-11-08'))
  return (
    <Calendar
      value={value}
      className={'aaa'}
      dateInnerContent={(value) => {
        return (
          <div>
            <p>{value.format('YYYY/MM/DD')}</p>
          </div>
        )
      }}
      onChange={(val) => {
        setValue(val)
      }}
      // locale='en-US'
    />
  )
}

export default Index
// ================================= 受控模式 end ========================
