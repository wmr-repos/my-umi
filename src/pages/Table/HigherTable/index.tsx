import { PageContainer, ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
// import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx'

export default () => {
  const handleExport = () => {
    try {
      const originData = [
        { id: '1', name: 'name1', age: 23, sex: '男' },
        { id: '2', name: 'name2', age: 25, sex: '女' },
        { id: '3', name: 'name3', age: 18, sex: '女' },
        { id: '4', name: 'name4', age: 22, sex: '男' },
      ]
      const data = [['id', '姓名', '年龄', '性别']] as any
      originData.forEach((item) => {
        data.push([item.id, item.name, item.age, item.sex])
      })

      const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data)
      console.log(worksheet)

      const workbook: XLSX.WorkBook = {
        SheetNames: ['sheet1'],
        Sheets: {
          sheet1: worksheet,
        },
      }

      const buf = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' })
      const blob = new Blob([buf], { type: 'application/octet-stream' })

      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'test.xlsx'
      a.click()
      URL.revokeObjectURL(url)
      document.body.removeChild(a)

      // const url = URL.createObjectURL(blob)
      // const a = document.createElement('a')
      // a.href = url
      // a.download = 'test.xlsx'
      // a.click()
      // saveAs(blob, 'test.xlsx');
    } catch {}
  }

  const columns = [
    {
      title: '序号',
      render: (text, record, index) => {
        return index + 1
      },
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '性别',
      dataIndex: 'sex',
    },
  ]

  return (
    <PageContainer
      header={{
        title: 'CRUD 示例',
      }}
    >
      <ProTable
        columns={columns}
        request={async (params, sorter, filter) => {
          // console.log(params, sorter, filter);
          return Promise.resolve({
            data: [
              { id: '1', name: 'name1', age: 23, sex: '男' },
              { id: '2', name: 'name2', age: 25, sex: '女' },
              { id: '3', name: 'name3', age: 18, sex: '女' },
              { id: '4', name: 'name4', age: 22, sex: '男' },
            ],
            success: true,
          })
        }}
        // search={{
        //   optionRender: false,
        //   collapsed: true,
        // }}
        rowKey="id"
        pagination={{
          showQuickJumper: true,
        }}
        dateFormatter="string"
        headerTitle="高级表格"
        toolBarRender={() => [
          <Button
            key="button"
            type="primary"
            onClick={() => {
              handleExport()
            }}
          >
            导出
          </Button>,
        ]}
      />
    </PageContainer>
  )
}
