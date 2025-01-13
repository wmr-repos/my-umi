import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Input } from 'antd'

const MyComponent = () => {
  const [storageVal, setValue] = useLocalStorage(
    'useLocalStorageTest',
    'default-value',
  )

  return (
    <div>
      <Input value={storageVal} onChange={(e) => setValue(e.target.value)} />
      <p>存的值为：{storageVal}</p>
    </div>
  )
}

export default MyComponent
