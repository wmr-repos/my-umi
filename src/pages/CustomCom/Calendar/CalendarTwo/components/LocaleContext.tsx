// 全局统一配置资源包
import { createContext } from 'react'

export interface LocalContextType {
  locale: string
}

const LocaleContext = createContext<LocalContextType>({
  locale: 'zh-CN',
})

export default LocaleContext
