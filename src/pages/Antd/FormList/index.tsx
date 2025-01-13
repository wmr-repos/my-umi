import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
// import { useEffect } from 'react'

const FormList = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('values', values)
  }

  // 点击新增按钮，弹出表单校验
  const handleAdd = async (add: () => void) => {
    const usersList = form.getFieldValue('usersList')
    if (Array.isArray(usersList) && usersList.length > 0) {
      await form.validateFields()
      // for (let i = 0; i < usersList.length; i++) {
      //   await form.validateFields([
      //     ['usersList', i, 'firstname'],
      //     ['usersList', i, 'lastname'],
      //   ])
      // }
    }
    add()
  }

  // 实现方式二，有缺陷
  // const values = Form.useWatch([], form)
  // useEffect(() => {
  //   form
  //     .validateFields({ validateOnly: true })
  //     .then(() => {
  //       console.log('form', form)
  //     })
  //     .catch((err) => {
  //       console.log('err', err)
  //     })
  // }, [form, values])

  return (
    <>
      <Form
        name="form-list"
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          label="其他表单项"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
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
