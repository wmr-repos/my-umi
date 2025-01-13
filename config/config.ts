import { defineConfig } from '@umijs/max'
// import AutoImport from 'unplugin-auto-import/webpack'
import { routes } from './routes'

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max/test',
  },
  routes: routes,
  npmClient: 'pnpm',
  // TODO: 这是错误的写法，正确的写法不知道
  // plugins: [
  //   AutoImport({
  //     include: [
  //       /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
  //       /\.md$/, // .md
  //     ],
  //     imports: [
  //       'react',
  //     ],
  //     dts: 'types/auto-imports.d.ts',
  //     eslintrc: {
  //       enabled: true,
  //       globalsPropValue: true,
  //     },
  //   }),
  // ],
})
