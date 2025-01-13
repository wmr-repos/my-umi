// 运行时配置
import { getLayoutConfig } from '@/layout';
import { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
// import {
//   createGlobalStyle,
//   RequestConfig,
//   RunTimeLayoutConfig,
// } from '@alipay/bigfish';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

// request 配置参考文档：https://bigfish.antgroup-inc.cn/docs/guides/request
export const request: RequestConfig = {
  requestInterceptors: [
    // oneapi mock server
    // (config: any) => {
    //   if (process.env.NODE_ENV !== 'development') return config;
    //   if (!config.url.startsWith('/')) return config;
    //   const appName = 'afs2demo';
    //   const tag = 'master';
    //   const source = 'ZAPPINFO';
    //   const scene = 'default';
    //   // &mode=static
    //   config.url = `https://oneapitwa.alipay.com/api/mock/proxy?appName=${appName}&tag=${tag}&source=${source}&scene=${scene}&path=${
    //     config.url.split('?')[0]
    //   }&method=${config.method}`;
    //   return config;
    // },
  ],
};


// export const layout: RunTimeLayoutConfig = (initialState) => {
//   return {
//     // 常用属性
//     title: '测试bigFish',
//     logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',

//     // 默认布局调整
//     // rightContentRender: () => <div>RightContent</div>,
//     // rightContentRender: undefined,

//     // footerRender: () => <Footer />,

//     // https://procomponents.ant.design/components/layout#menu
//     menuHeaderRender: undefined,

//     // 其他属性见：https://procomponents.ant.design/components/layout#prolayout

//     // menuFooterRender: (props) => {
//     //   return (
//     //     <div
//     //       style={{
//     //         textAlign: 'center',
//     //         paddingBlockStart: 12,
//     //       }}
//     //     >
//     //       <div>© 2021 Made with love</div>
//     //       <div>by Ant Design</div>
//     //     </div>
//     //   );
//     // }
//   };
// };

export const layout: RunTimeLayoutConfig = (initData) => {
  return {
    ...getLayoutConfig(initData),
  };
};
