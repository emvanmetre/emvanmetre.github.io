import { useEffect } from 'react'
import { MinNativeRef } from '../../core/types/core.types'
import { CoreProps } from '../../core/types/utility'
import { RenderComp } from '../core/render-comp.component'
import { renderWithRef } from '../core/render-with-ref'
import { useSwordle, useSwordleData } from './swordle.context'
import { error } from 'console'

type Props = {
  words: string[] // TODO: remove this prop and get words from context instead
  loading: boolean
  error: string | null
}

export type SwordleInternalProps = Omit<CoreProps<JSX.IntrinsicElements['div'], HTMLDivElement, Props>, 'children'>

const SwordleInternal = renderWithRef<MinNativeRef, SwordleInternalProps>('Swordle', (props, ref) => {
  const { words, loading, error } = props
  const { currentWord, currentGuess, handleKeyup } = useSwordle()

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup) // avoids having multiple keyup listeners
  }, [handleKeyup])

  return (
    <RenderComp root="div" forwardedRef={ref} props={{ ...props }}>
      <p>current word: {currentWord}</p>
      <p>CURRENT GUESS: {currentGuess}</p>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <ul>
          {words.map(word => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      )}
    </RenderComp>
  )
})

export default SwordleInternal
