import { createContext, ReactNode, useContext } from 'react'

import React, { useEffect, useState } from 'react'

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

const useSwordleData = () => {
  const [words, setWords] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWithTimeout = (url: string, timeout: number) => {
      return Promise.race([
        fetch(url).then(res => {
          if (!res.ok) throw new Error('Network response was not ok')
          return res.json()
        }),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Fetch timeout')), timeout)),
      ])
    }

    fetchWithTimeout('/swordle.json', 5000)
      .then(data => {
        setWords(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { words, loading, error }
}

export default useSwordleData
