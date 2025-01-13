import AreaComponent from '@/pages/Antv/Area/components/area';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Flex } from 'antd';
import React from 'react';

const Area: React.FC = () => {
  return (
    <PageContainer
      ghost
      header={{
        title: 'antv',
      }}
    >
      <Card>
        <Flex>
          <AreaComponent />
        </Flex>
      </Card>
    </PageContainer>
  );
};

export default Area;
