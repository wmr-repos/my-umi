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

// 浏览器的observer
const ObserverMenu = [
  {
    path: '/operate/observer',
    redirect: '/operate/observer/intersectionObserver',
  },
  {
    name: 'IntersectionObserver',
    path: '/operate/observer/intersectionObserver',
    component: './Operate/Observer/IntersectionObserver',
  },
  {
    name: 'MutationObserver',
    path: '/operate/observer/mutationObserver',
    component: './Operate/Observer/MutationObserver',
  },
  {
    name: 'ResizeObserver',
    path: '/operate/observer/resizeObserver',
    component: './Operate/Observer/ResizeObserver',
  },
  {
    name: 'PerformanceObserver',
    path: '/operate/observer/performanceObserver',
    component: './Operate/Observer/PerformanceObserver',
  },
  {
    name: 'ReportingObserver',
    path: '/operate/observer/reportingObserver',
    component: './Operate/Observer/ReportingObserver',
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
  {
    name: '浏览器的observe',
    path: '/operate/observer',
    routes: ObserverMenu,
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
    name: '受控组件与非受控组件',
    path: '/antd/controllerAndUnController',
    component: './Antd/ControllerAndUnController',
  },
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
    name: 'useEffect',
    path: '/reactStudy/reactHooks/useEffect',
    component: './ReactStudy/ReactHooks/UseEffect',
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

// react闭包陷阱
const ClosureMemu = [
  {
    path: '/reactStudy/closure',
    redirect: '/reactStudy/closure/closureDemo',
  },
  {
    name: '闭包案例',
    path: '/reactStudy/closure/closureDemo',
    component: './ReactStudy/Closure/ClosureDemo',
  },
  {
    name: '闭包一',
    path: '/reactStudy/closure/closureOne',
    component: './ReactStudy/Closure/ClosureOne',
  },
  {
    name: '闭包二',
    path: '/reactStudy/closure/closureTwo',
    component: './ReactStudy/Closure/ClosureTwo',
  },
  {
    name: '闭包三',
    path: '/reactStudy/closure/closureThree',
    component: './ReactStudy/Closure/ClosureThree',
  },
  {
    name: '闭包四',
    path: '/reactStudy/closure/closureFour',
    component: './ReactStudy/Closure/ClosureFour',
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
  {
    name: '闭包问题',
    path: '/reactStudy/closure',
    routes: ClosureMemu,
  },
  {
    name: '调试',
    path: '/reactStudy/debug',
    component: './ReactStudy/Debug',
  },
  {
    name: 'Suspense',
    path: '/reactStudy/suspense',
    component: './ReactStudy/Suspense',
  },
  {
    name: 'ChildrenReplace',
    path: '/reactStudy/childrenReplace',
    component: './ReactStudy/ChildrenReplace',
  },
]

// 日历组件
const CalendarMenu = [
  {
    path: '/customCom/calendar',
    redirect: '/customCom/calendar/calendarOne',
  },
  {
    name: '日历一',
    path: '/customCom/calendar/calendarOne',
    component: './CustomCom/Calendar/CalendarOne',
  },
  {
    name: '日历二',
    path: '/customCom/calendar/calendarTwo',
    component: './CustomCom/Calendar/CalendarTwo',
  },
  {
    name: '日历三',
    path: '/customCom/calendar/calendarThree',
    component: './CustomCom/Calendar/CalendarThree',
  },
]

// 图标
const IconMenu = [
  {
    path: '/customCom/icon',
    redirect: '/customCom/icon/antdIcon',
  },
  {
    name: 'antd组件库图标',
    path: '/customCom/icon/antdIcon',
    component: './CustomCom/Icon/AntdIcon',
  },
  {
    name: '自定义图标',
    path: '/customCom/icon/customIcon',
    component: './CustomCom/Icon/CustomIcon',
  },
]

// space 布局组件
const SpaceMenu = [
  {
    path: '/customCom/space',
    redirect: '/customCom/space/antdSpace',
  },
  {
    name: 'antdSpace',
    path: '/customCom/space/antdSpace',
    component: './CustomCom/CustomSpace/AntdSpace',
  },
  {
    name: 'customSpace',
    path: '/customCom/space/customSpace',
    component: './CustomCom/CustomSpace/CustomSpace',
  },
]

// Watermark 水印组件
const WatermarkMenu = [
  {
    path: '/customCom/watermark',
    redirect: '/customCom/watermark/antdWatermark',
  },
  {
    name: 'antdWatermark',
    path: '/customCom/watermark/antdWatermark',
    component: './CustomCom/CustomWatermark/AntdWatermark',
  },
  {
    name: 'customWatermark',
    path: '/customCom/watermark/customWatermark',
    component: './CustomCom/CustomWatermark/CustomWatermark',
  },
]

// form表单组件
const FormMenu = [
  {
    path: '/customCom/form',
    redirect: '/customCom/form/antdFrom',
  },
  {
    name: 'antdFrom',
    path: '/customCom/form/antdFrom',
    component: './CustomCom/CustomForm/AntdForm',
  },
  {
    name: 'customForm',
    path: '/customCom/form/customForm',
    component: './CustomCom/CustomForm/CustomForm',
  },
]

// 自定义组件
const customComMemu = [
  {
    path: '/customCom',
    redirect: '/customCom/calendar',
  },
  {
    name: '日历',
    path: '/customCom/calendar',
    routes: CalendarMenu,
  },
  {
    name: '图标',
    path: '/customCom/icon',
    routes: IconMenu,
  },
  {
    name: 'space',
    path: '/customCom/space',
    routes: SpaceMenu,
  },
  {
    name: 'Watermark',
    path: '/customCom/watermark',
    routes: WatermarkMenu,
  },
  {
    name: 'Form',
    path: '/customCom/form',
    routes: FormMenu,
  },
]

// 三种常见的组件封装
const threePackageMenu = [
  {
    path: '/threePackage',
    redirect: '/threePackage/portal',
  },
  {
    name: 'Portal',
    path: '/threePackage/portal',
    component: './ThreePackage/Portal',
  },
  {
    name: 'MutateObserver',
    path: '/threePackage/mutateObserver',
    component: './ThreePackage/MutateObserver',
  },
  {
    name: 'CopyToClipboard',
    path: '/threePackage/copyToClipboard',
    component: './ThreePackage/CopyToClipboard',
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
    name: '自定义组件',
    path: '/customCom',
    routes: customComMemu,
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
  {
    name: 'ThreePackage',
    path: '/threePackage',
    routes: threePackageMenu,
  },
]
