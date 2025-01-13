参考文章：https://juejin.cn/post/6844904176770613261

```javascript
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'

const FormList = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('values', values)
  }

  // 点击新增按钮，弹出表单校验
  const handleAdd = async (add: () => void) => {
    add()
  }

  return (
    <>
      <Form
        name="form-list"
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        form={form}
      >
        <Form.List name="usersList">
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map(({ key, name }) => (
                  <div
                    key={key}
                    style={{
                      display: 'flex',
                      marginBottom: 8,
                      alignItems: 'center',
                    }}
                  >
                    <Form.Item
                      label="First Name"
                      name={[name, 'firstname']}
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                      style={{ marginBottom: 0 }}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Last Name"
                      name={[name, 'lastname']}
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                      style={{ marginBottom: 0 }}
                    >
                      <Input />
                    </Form.Item>
                    <div style={{ marginBottom: 0 }}>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </div>
                  </div>
                ))}
                <Button
                  type="dashed"
                  onClick={() => handleAdd(add)}
                  block
                  icon={<PlusOutlined />}
                  style={{ width: '50%' }}
                >
                  Add field
                </Button>
              </>
            )
          }}
        </Form.List>
      </Form>
    </>
  )
}

export default FormList
```
