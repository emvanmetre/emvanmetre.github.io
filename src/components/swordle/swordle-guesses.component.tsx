import { CoreProps } from '../../core/types/utility'
import { RenderComp } from '../core/render-comp.component'
import { renderWithRef } from '../core/render-with-ref'
import { GridContainer, Row, Column } from '../grid'
import SwordleTile from './swordle-tile.component'
import { useSwordle } from './swordle.context'

type Props = {}

export type SwordleGuessesProps = Omit<CoreProps<JSX.IntrinsicElements['div'], HTMLDivElement, Props>, 'children'>

const SwordleGuesses = renderWithRef<HTMLDivElement, SwordleGuessesProps>('SwordleGuesses', (props, ref) => {
  const { currentWord, currentGuess, wordLength, maxTurns, turn, formattedGuesses } = useSwordle()

  const spaceIndexes = currentWord
    .split('')
    .map((char, i) => (char === ' ' ? i : -1))
    .filter(i => i !== -1)

  const classNames = new Set<string>(['swordle-guesses'])
  //   if (skin === 'color-swatches') {
  //     classNames.add(`swan-accordion-skin-${skin}`)
  //   }
  return (
    <RenderComp root="div" classNames={classNames} forwardedRef={ref} props={{ ...props }}>
      <GridContainer>
        {formattedGuesses.map((guess, i) => {
          return (
            <Row key={`row-${i}`} className="swordle-guess-row">
              {guess.map((letter, j) => {
                if (spaceIndexes.includes(j)) {
                  return (
                    <>
                      <Column key={`space-${j}`} className={`swordle-letter`}>
                        <SwordleTile space>{''}</SwordleTile>
                      </Column>
                      <Column key={`letter-${j}`} className={`swordle-letter`}>
                        <SwordleTile color={letter.color}>{letter.key}</SwordleTile>
                      </Column>
                    </>
                  )
                }
                return (
                  <Column key={`letter-${j}`} className={`swordle-letter`}>
                    <SwordleTile color={letter.color}>{letter.key}</SwordleTile>
                  </Column>
                )
              })}
            </Row>
          )
        })}
        {[...Array(maxTurns - turn)].map((_, i) => (
          <Row key={`row-${i + turn}`} className="swordle-guess-row">
            {[...Array(wordLength)].map((_, j) => {
              if (spaceIndexes.includes(j)) {
                return (
                  <>
                    <Column key={`space-${j}`} className={`swordle-letter`}>
                      <SwordleTile space>{''}</SwordleTile>
                    </Column>
                    <Column key={`letter-${j}`} className={`swordle-letter`}>
                      <SwordleTile>{''}</SwordleTile>
                    </Column>
                  </>
                )
              }
              return (
                <Column key={`letter-${j}`} className={`swordle-letter`}>
                  <SwordleTile>{''}</SwordleTile>
                </Column>
              )
            })}
          </Row>
        ))}
      </GridContainer>
    </RenderComp>
  )
})

export default SwordleGuesses
