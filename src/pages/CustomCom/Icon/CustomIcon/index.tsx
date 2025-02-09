import { Space } from 'antd'
import { IconAdd } from './IconAdd'
import { createFromIconfrom } from './components/createFromIconfont'

const Iconfont = createFromIconfrom(
  '//at.alicdn.com/t/c/font_4823768_hjq3u4dmu1.js',
)

const Index = () => {
  return (
    <Space>
      <IconAdd />
      <IconAdd size="40px" />
      <IconAdd spin />
      <IconAdd style={{ color: 'blue', fontSize: '50px' }} />
      <Iconfont type="icon-dengguang" size="40px"></Iconfont>
      <Iconfont type="icon-dengguang" fill="blue" size="40px"></Iconfont>
    </Space>
  )
}

export default Index
