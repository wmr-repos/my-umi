import React from 'react'
import { useControllableValue } from '../../useControllableValue'

type Props = {
  defaultValue?: string
  value?: string
  onChange?: (e: string) => void
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// 非受控组件
// const Index: React.FC = (props: Props) => {
//   const { defaultValue, onChange } = props
//   return <input type="text" defaultValue={defaultValue} onChange={onChange} />
// }

// 受控组件
// const Index: React.FC = (props: Props) => {
//   const { defaultValue, value, onChange } = props
//   return (
//     <input
//       type="text"
//       defaultValue={defaultValue}
//       value={value}
//       onChange={onChange}
//     />
//   )
// }

// 使用自定义hook判断是受控组件还是非受控组件
const Index = (props: Props) => {
  const { defaultValue } = props
  const [value, setValue] = useControllableValue<string>(props)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    setValue(v)
  }
  return (
    <>
      <input
        type="text"
        defaultValue={defaultValue}
        value={value}
        onChange={handleChange}
      />
    </>
  )
}

export default Index
