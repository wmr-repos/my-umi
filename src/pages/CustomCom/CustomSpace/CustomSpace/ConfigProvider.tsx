import { createContext, PropsWithChildren } from 'react'
import { sizeType } from './components/Space'

export interface ConfigContextType {
  space?: {
    size?: sizeType
  }
}

export const ConfigContext = createContext<ConfigContextType>({})

interface ConfigProviderProps extends PropsWithChildren<ConfigContextType> {}

export function ConfigProvider(props: ConfigProviderProps) {
  const { space, children } = props

  return (
    <ConfigContext.Provider value={{ space }}>
      {children}
    </ConfigContext.Provider>
  )
}
