import { PageContainer } from '@ant-design/pro-components';
import { Select, SelectProps } from 'antd';
import jsonp from 'fetch-jsonp';
import { useState } from 'react';
import { debounce } from './utils/debounce';

export default () => {
  const [data, setData] = useState<SelectProps['options']>([]);
  const [value, setValue] = useState<string>();

  const handleChange = (val: string) => {
    setValue(val);
  };

  // 报了跨域错误，使用jsonp解决跨越问题
  // const handleSearch = (val: string) => {
  //   if (val === '') return;
  //   request(`https://suggest.taobao.com/sug?code=utf-8&q=${val}`, {
  //     method: 'GET',
  //   }).then((res) => {
  //     console.log(res, '===');
  //   });
  // };

  // jsonp解决跨域问题
  const fetchData = (value: string) => {
    jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`)
      .then((response: any) => response.json())
      .then((data) => {
        const { result } = data;
        const options = result.map((item: string) => ({
          label: item[0],
          value: item[0],
        }));
        setData(options);
      });
  };

  const handleSearch = debounce((value: string) => {
    fetchData(value);
  }, 500);

  return (
    <>
      <PageContainer
        header={{
          title: '防抖',
        }}
      >
        <Select
          showSearch
          suffixIcon={null}
          style={{ width: 200 }}
          value={value}
          options={data}
          notFoundContent={null}
          onChange={handleChange}
          onSearch={handleSearch}
        />
      </PageContainer>
    </>
  );
};
