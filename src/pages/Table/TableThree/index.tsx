import React, { useRef } from 'react'
import { PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import type { FormInstance } from 'antd';
import { Button, Input } from 'antd';

type DataSourceType = {
  id: string;
  name: string;
  age: number;
  sex: string;
};

export default () => {
  const formRef = useRef<FormInstance>();

  const handleRefresh = () => {
    formRef.current?.submit();
  };

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      hideInSearch: true,
      hideInTable: true,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      renderFormItem: () => {
        return <Input placeholder="请输入年龄" />;
      },
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
    },
    {
      title: '操作',
      key: 'option',
      valueType: 'option',
      render: () => [<a>编辑</a>, <a>删除</a>],
    },
  ];

  return (
    <>
      <PageContainer title="表格">
        <ProTable<DataSourceType>
          formRef={formRef}
          columns={columns}
          // title={() => (<span>表格标题</span>)}
          request={() => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve({
                  data: [
                    { id: '1', name: 'name1', age: 18, sex: '男' },
                    { id: '2', name: 'name2', age: 19, sex: '女' },
                    { id: '3', name: 'name3', age: 20, sex: '女' },
                    { id: '4', name: 'name4', age: 21, sex: '男' },
                  ],
                  success: true,
                });
              }, 1000);
            });
          }}
          toolBarRender={() => [
            <Button key="reload" onClick={handleRefresh}>
              手动刷新表格
            </Button>,
          ]}
        />
      </PageContainer>
    </>
  );
};
