import React from 'react'
import Input from './components/Input'

// ========================== 受控组件 start ========================
// const Index: React.FC = () => {
//   const [value, setValue] = useState('')

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const v = e.target.value
//     setValue(v)
//   }

//   return (
//     <>
//       <h3>受控组件</h3>
//       <p>{value}</p>
//       <input type="text" value={value} onChange={handleChange} />
//     </>
//   )
// }

// export default Index
// ========================== 受控组件 end ========================

// ========================== 非受控组件 start ========================
// const Index: React.FC = () => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const v = e.target.value
//     console.log('非受控组件', v)
//   }

//   return (
//     <>
//       <h3>非受控组件</h3>
//       <input defaultValue={'11'} onChange={handleChange} />
//     </>
//   )
// }

// export default Index
// =============================== 非受控组件 end ===============================

// ========================== antd处理组件受控组件 start ========================
// const Index: React.FC = () => {

//   const [value, setValue] = useState<string>('hello world');
//   const handleChange = (e: string) => {
//       console.log("🚀 ~ handleChange ~ e:", e)
//       setValue(e);
//   };
//   return <div>
//       <Input value={value} onChange={handleChange} />
//   </div>;

// }

// export default Index

// ========================== antd处理组件受控组件 end ========================

// ========================== antd处理组件非受控组件 start ======================
const Index: React.FC = () => {
  const handleChange = (e: string) => {
    console.log('🚀 ~ handleChange ~ e:', e)
  }
  return (
    <div>
      <Input defalutValue={'hello'} onChange={handleChange} />
    </div>
  )
}

export default Index
// ========================== antd处理组件非受控组件 end ========================
