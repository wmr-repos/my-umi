// import { Flex } from 'antd'
// import React, { useEffect, useRef } from 'react'
// import { Calendar, CalendarRef } from './components/index'

// const Index: React.FC = () => {
//   const calendarRef = useRef<CalendarRef>(null)

//   useEffect(() => {
//     console.log(
//       '从子组件暴露出来的方法',
//       calendarRef.current?.getDate().toLocaleDateString(),
//     )

//     setTimeout(() => {
//       calendarRef.current?.setDate(new Date(2025, 7, 9))
//     }, 2000)
//   }, [])

//   return (
//     <>
//       <Flex gap={20}>
//         <Calendar
//           onChange={(date) => {
//             console.log(date.toLocaleDateString())
//           }}
//         />
//         <Calendar
//           ref={calendarRef}
//           defaultValue={new Date('2023-3-5')}
//           onChange={(date) => {
//             console.log(date.toLocaleDateString())
//           }}
//         />
//         <Calendar
//           defaultValue={new Date('2023-8-15')}
//           onChange={(date) => {
//             console.log(date.toLocaleDateString())
//           }}
//         />
//       </Flex>
//     </>
//   )
// }

// export default Index

// =========================== 受控模式与非受控模式 start ===================================
import { Button, Flex } from 'antd'
import React, { useState } from 'react'
import { Calendar } from './components/index'

const Index: React.FC = () => {
  // const [date, setDate] = useState(new Date())

  // return (
  //   <>
  //     <Flex gap={20}>
  //       <Calendar
  //         value={date}
  //         onChange={(date) => {
  //           setDate(date)
  //           console.log('受控模式', date.toLocaleDateString())
  //         }}
  //       />

  //     </Flex>
  //   </>
  // )

  const [num, setNum] = useState(0)

  return (
    <Flex gap={20}>
      <Button
        type="primary"
        onClick={() => {
          setNum((num) => num + 1)
        }}
      >
        {num}
      </Button>
      <Calendar />
      {/* <Calendar
        defaultValue={new Date('2023-8-15')}
        onChange={(date) => {
          console.log('非受控模式', date.toLocaleDateString())
        }}
      /> */}
    </Flex>
  )
}

export default Index
// =========================== 受控模式与非受控模式 end ===================================
