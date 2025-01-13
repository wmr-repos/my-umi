import { PageContainer } from '@ant-design/pro-components';
import { DatePicker, Segmented } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

export default () => {
  const [dateTab, setDateTab] = useState<string>(); // 选择的日期tab
  const [startTime, setStartTime] = useState<string>(
    dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
  ); // 开始时间
  const [endTime, setEndTime] = useState<string>(dayjs().format('YYYY-MM-DD')); // 结束时间

  // 根据选择的日期修改日历的时间
  const onChangeDate = (value: string) => {
    if (value === '近7天') {
      setStartTime(dayjs().subtract(6, 'day').format('YYYY-MM-DD'));
      setEndTime(dayjs().format('YYYY-MM-DD'));
    } else if (value === '近1月') {
      setStartTime(dayjs().subtract(1, 'month').format('YYYY-MM-DD'));
      setEndTime(dayjs().format('YYYY-MM-DD'));
    } else {
      setStartTime(dayjs().subtract(1, 'year').format('YYYY-MM-DD'));
      setEndTime(dayjs().format('YYYY-MM-DD'));
    }
  };
  return (
    <>
      <PageContainer
        ghost
        header={{
          title: '',
          breadcrumb: {},
        }}
      >
        <Segmented
          value={dateTab}
          options={['近7天', '近1月', '近1年']}
          onChange={(value) => {
            setDateTab(value);
            onChangeDate(value);
          }}
        />
        <DatePicker.RangePicker
          value={[dayjs(startTime), dayjs(endTime)]}
          style={{ marginLeft: '10px' }}
        />
      </PageContainer>
    </>
  );
};
