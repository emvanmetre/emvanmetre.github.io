import { createContext, ReactNode, useCallback, useContext } from 'react'

import React, { useEffect, useState } from 'react'

export type SwordleContextValue = {
  currentWord: string
  wordLength: number
  maxTurns: number
  turn: number
  currentGuess: string
  guesses: string[]
  isCorrect: boolean
  addNewGuess: () => void
  formatGuess: (isCorrect: boolean) => { key: string; color: string }[]
  handleKeyup: (event: KeyboardEvent) => boolean
  playAgain: () => void
}

export type SwordleContextProps = {
  children: ReactNode
  wordList: string[]
}

export const SwordleContext = createContext<SwordleContextValue | undefined>(undefined)

export const SwordleContextProvider = (props: SwordleContextProps) => {
  const { children, wordList } = props

  const getRandomWord = useCallback(() => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  }, [wordList])

  const [currentWord, setCurrentWord] = useState('')
  const [wordLength, setWordLength] = useState(5)
  const [maxTurns, setMaxTurns] = useState(6)
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState<string[]>([])
  const [isCorrect, setIsCorrect] = useState(false)
  // const [usedKeys, setUsedKeys] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    if (wordList.length > 0) {
      const newWord = getRandomWord().toLowerCase()
      const newWordLength = newWord.replace(/ /g, '').length

      setCurrentWord(newWord)
      setWordLength(newWordLength)
      setMaxTurns(newWordLength + 1)
    }
  }, [wordList, getRandomWord])

  // format guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = (correct: boolean) => {
    let guessArray = currentGuess.split('')
    let formattedGuess = []

    // if the guess is correct, return all green
    if (correct) {
      formattedGuess = guessArray.map(letter => {
        return { key: letter, color: 'green' }
      })
      return formattedGuess
    }

    let solutionArray = currentWord.replace(/ /g, '').split('')

    formattedGuess = guessArray.map(letter => {
      return { key: letter, color: 'grey' }
    })

    // find any green letters
    formattedGuess.forEach((letter, i) => {
      if (solutionArray[i] === letter.key) {
        letter.color = 'green'
        solutionArray[i] = ''
      }
    })

    // find any yellow letters
    formattedGuess.forEach(letter => {
      if (solutionArray.includes(letter.key) && letter.color !== 'green') {
        letter.color = 'yellow'
        solutionArray[solutionArray.indexOf(letter.key)] = ''
      }
    })

    return formattedGuess
  }

  // add a new guess to the guesses state
  // update isCorrect state if the guess is correct
  // add one to the turn state
  // reset currentGuess state
  const addNewGuess = () => {
    setGuesses([...guesses, currentGuess])
    // validate guess
    const isCorrect = currentGuess === currentWord.replace(/ /g, '')
    const formattedGuess = formatGuess(isCorrect)
    console.log({ formattedGuess })
    // clear guess if incorrect
    if (isCorrect) {
      setIsCorrect(true)
    } else {
      setCurrentGuess('')
      setTurn(turn + 1)
    }
  }

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  // returns false if the guess is invalid, otherwise returns true
  const handleKeyup = (event: KeyboardEvent) => {
    console.log(event.key)
    const regEx = /^[A-Za-z]$/
    if (regEx.test(event.key) && currentGuess.length < wordLength) {
      setCurrentGuess(currentGuess + event.key)
      return true
    }
    if (event.key === 'Backspace' && currentGuess.length > 0) {
      setCurrentGuess(currentGuess.slice(0, -1))
      return true
    }
    if (event.key === 'Enter') {
      // only add guess if turn is less than maxTurns and the word hasn't been guessed already
      if (turn < maxTurns && !guesses.includes(currentGuess) && currentGuess.length === wordLength) {
        addNewGuess()
        return true
      }
      return false
    }
  }

  const playAgain = () => {
    setCurrentWord(getRandomWord())
    setCurrentGuess('')
    setGuesses([])
    setTurn(0)
    setIsCorrect(false)
  }

  const swordleValue = { currentWord, wordLength, maxTurns, currentGuess, turn, guesses, isCorrect, formatGuess, addNewGuess, handleKeyup, playAgain }

  return <SwordleContext.Provider value={swordleValue}>{children}</SwordleContext.Provider>
}

export const useSwordle = () => useContext(SwordleContext)

export const useSwordleData = () => {
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
