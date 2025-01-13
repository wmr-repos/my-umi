import { RunTimeLayoutConfig } from '@umijs/max';
import { Button } from 'antd';
import { createRef } from 'react';

export const layoutActionRef = createRef<{ reload: () => void }>();

const MlLogo = () => {
  return (
    <div
      style={{
        fontSize: '14px',
        cursor: 'pointer',
        color: '#000000d9',
        fontWeight: 600,
        display: 'flex',
        lineHeight: '18px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '34px',
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <img src="https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg" />
      <span>umiMax</span>
    </div>
  );
};

export const getLayoutConfig: RunTimeLayoutConfig = () => {
  return {
    token: {
      header: {
        colorTextMenuSelected: '#4b6fff',
        colorTextMenuActive: '#4b6fff',
      },
    },

    // 刷新菜单操作
    actionRef: layoutActionRef,

    menu: {
      locale: false, // 是否需要国际化
      defaultOpenAll: true, // 默认展开所有菜单
      ignoreFlatMenu: true,
    },

    title: '',

    // 把一级路由放在导航栏顶部
    splitMenus: true,

    //   logo: () => (routerType === 'LINGZHI' ? <LzLogo /> : <MlLogo />),
    logo: <MlLogo />,
    headerHeight: 48,
    layout: 'mix',
    rightContentRender(_, dom) {
      return (
        <>
          <Button type="primary" size="middle" style={{ marginRight: '24px' }}>
            右侧渲染菜单
          </Button>
          {dom}
        </>
      );
    },
  };
};
