// antv图表
const antvMenu = [
  {
    path: '/antv',
    redirect: '/antv/area',
  },
  {
    name: '面积图',
    path: '/antv/area',
    component: './Antv/Area',
  },
]

// 表格
const tableMenu = [
  {
    path: '/table',
    redirect: '/table/basic',
    // component: './Table/HigherTable',
  },
  {
    name: '基础表格',
    path: '/table/basic',
    component: './Table',
  },
  {
    name: '高级表格',
    path: '/table/higher',
    component: './Table/HigherTable',
  },
  {
    name: '表格3',
    path: '/table/tableThree',
    component: './Table/TableThree',
  },
]

// div插入html
const toHtmlMenu = [
  {
    path: '/operate/operate2/toHtml',
    redirect: '/operate/operate2/toHtml/strToHtml',
  },
  {
    name: '字符串转html',
    path: '/operate/operate2/toHtml/strToHtml',
    component: './Operate/InsertHtml/StringToHtml',
  },
  {
    name: '富文本编辑器',
    path: '/operate/operate2/toHtml/markdownToHtml',
    component: './Operate/InsertHtml/MarkdownToHtml',
  },
]

// 防抖与节流操作菜单
const throttleAndDebounceMenu = [
  {
    path: '/operate/throttleAndDebounce',
    redirect: '/operate/throttleAndDebounce/debounce',
  },
  {
    name: '防抖',
    path: '/operate/throttleAndDebounce/debounce',
    component: './Operate/ThrottleAndDebounce/Debounce',
  },
  {
    name: '节流',
    path: '/operate/throttleAndDebounce/throttle',
    component: './Operate/ThrottleAndDebounce/Throttle',
  },
]

// 操作菜单
const operateMenu = [
  {
    path: '/operate',
    redirect: '/operate/operate1',
  },
  {
    name: '操作1',
    path: '/operate/operate1',
    component: './Operate/Copy',
  },
  {
    name: '操作2',
    routes: toHtmlMenu,
  },
  {
    name: '工具',
    path: '/operate/operate3',
    component: './Operate/Tools',
  },
  {
    name: '防抖与节流',
    path: '/operate/throttleAndDebounce',
    routes: throttleAndDebounceMenu,
  },
  {
    name: '闭包',
    path: '/operate/closure',
    component: './Operate/Closure',
  },
]

const commMenu = [
  {
    path: '/comm',
    redirect: '/comm/comm1',
  },
  {
    name: '子组件向父组件传递信息',
    path: '/comm/comm1',
    component: './Comm/Comm1',
  },
]

// antd组件库练习
const antdMenu = [
  {
    path: '/antd',
    redirect: '/antd/formList',
  },
  {
    name: 'FormList表单校验',
    path: '/antd/formList',
    component: './Antd/FormList',
  },
  {
    name:'受控组件与非受控组件',
    path:'/antd/controllerAndUnController',
    component:'./Antd/ControllerAndUnController'
  }
]

// 自定义hook
const customHooksMenu = [
  {
    path: '/reactStudy/customHooks',
    redirect: '/reactStudy/customHooks/useLocalStorage',
  },
  {
    name: 'useLocalStorage',
    path: '/reactStudy/customHooks/useLocalStorage',
    component: './ReactStudy/CustomHooks/UseLocalStorage',
  },
  {
    name: 'useDebounce',
    path: '/reactStudy/customHooks/useDebounce',
    component: './ReactStudy/CustomHooks/UseDebounce',
  },
  {
    name: 'useThrottle',
    path: '/reactStudy/customHooks/useThrottle',
    component: './ReactStudy/CustomHooks/UseThrottle',
  },
]

// 组件间通信
const InfoTransMenu = [
  {
    path: '/reactStudy/infoTrans',
    redirect: '/reactStudy/infoTrans/fatherToChild',
  },
  {
    name: '父传子',
    path: '/reactStudy/infoTrans/fatherToChild',
    component: './ReactStudy/InfoTrans/FatherToChild',
  },
  {
    name: '子传父',
    path: '/reactStudy/infoTrans/childToFather',
    component: './ReactStudy/InfoTrans/ChildToFather',
  },
  {
    name: '跨层级通信',
    path: '/reactStudy/infoTrans/context',
    component: './ReactStudy/InfoTrans/Context',
  },
]

// react hooks
const reactHooksMenu = [
  {
    path: '/reactStudy/reactHooks',
    redirect: '/reactStudy/reactHooks/useStateObject',
  },
  {
    name: 'useState传入对象',
    path: '/reactStudy/reactHooks/useStateObject',
    component: './ReactStudy/ReactHooks/UseStateObject',
  },
  {
    name: 'useContext',
    path: '/reactStudy/reactHooks/useContext',
    component: './ReactStudy/ReactHooks/UseContext',
  },
  {
    name: 'useReducer',
    path: '/reactStudy/reactHooks/useReducer',
    component: './ReactStudy/ReactHooks/UseReducer',
  },
  {
    name: 'useMemo',
    path: '/reactStudy/reactHooks/useMemo',
    component: './ReactStudy/ReactHooks/UseMemo',
  },
  {
    name: 'useCallback',
    path: '/reactStudy/reactHooks/useCallback',
    component: './ReactStudy/ReactHooks/UseCallback',
  },
  {
    name: 'useRef',
    path: '/reactStudy/reactHooks/useRef',
    component: './ReactStudy/ReactHooks/UseRef',
  },
  {
    name: 'useImperativeHandle',
    path: '/reactStudy/reactHooks/useImperativeHandle',
    component: './ReactStudy/ReactHooks/UseImperativeHandle',
  },
  {
    name: 'useLayoutEffect',
    path: '/reactStudy/reactHooks/useLayoutEffect',
    component: './ReactStudy/ReactHooks/UseLayoutEffect',
  },
  {
    name: 'useDebugValue',
    path: '/reactStudy/reactHooks/useDebugValue',
    component: './ReactStudy/ReactHooks/UseDebugValue',
  },
]

// react 学习
const reactStudyMenu = [
  {
    path: '/reactStudy',
    redirect: '/reactStudy/infoTrans',
  },
  {
    name: '组件通信',
    path: '/reactStudy/infoTrans',
    routes: InfoTransMenu,
  },
  {
    name: 'reactHooks',
    path: '/reactStudy/reactHooks',
    routes: reactHooksMenu,
  },
  {
    name: '自定义hooks',
    path: '/reactStudy/customHooks',
    routes: customHooksMenu,
  },
]

export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: '表格示例',
    path: '/table',
    routes: tableMenu,
  },
  {
    name: '操作',
    path: '/operate',
    routes: operateMenu,
  },
  {
    name: 'antv',
    path: '/antv',
    routes: antvMenu,
  },
  {
    name: 'comm',
    path: '/comm',
    routes: commMenu,
  },
  {
    name: 'antd',
    path: '/antd',
    routes: antdMenu,
  },
  {
    name: 'reactStudy',
    path: '/reactStudy',
    routes: reactStudyMenu,
  },
]
