import { createContext, ReactNode, useContext } from 'react'

export type SwordleContextValue = {
  currentWord: string
}

export type SwordleContextProps = {
  children: ReactNode
  value: SwordleContextValue
}

export const SwordleContext = createContext<SwordleContextValue | undefined>(undefined)

export const SwordleContextProvider = (props: SwordleContextProps) => {
  const { children, value } = props

  return <SwordleContext.Provider value={value}>{children}</SwordleContext.Provider>
}

export const useSwordle = () => useContext(SwordleContext)
