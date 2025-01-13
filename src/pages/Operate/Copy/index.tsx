import { SearchOutlined } from '@ant-design/icons'
import { PageContainer } from '@ant-design/pro-components'
import { Button, Flex, message } from 'antd'

export default () => {
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText('这是文本内容')
      message.success('文本已复制到剪切板')
    } catch (err) {
      console.error('无法复制文本: ', err)
    }
  }

  
  return (
    <PageContainer title="复制操作以及按钮">
      <Flex gap="small" wrap>
        <Button
          onClick={copyText}
          type="primary"
          icon={<SearchOutlined />}
          iconPosition={'end'}
        >
          复制
        </Button>
        <Button>复制</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
    </PageContainer>
  )
}
