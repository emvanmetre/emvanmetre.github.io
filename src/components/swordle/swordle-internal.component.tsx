import { MinNativeRef } from '../../core/types/core.types'
import { CoreProps } from '../../core/types/utility'
import { RenderComp } from '../core/render-comp.component'
import { renderWithRef } from '../core/render-with-ref'
import useSwordleData from './swordle.context'

type Props = {}

export type SwordleInternalProps = Omit<CoreProps<JSX.IntrinsicElements['div'], HTMLDivElement, Props>, 'children'>

const SwordleInternal = renderWithRef<MinNativeRef, SwordleInternalProps>('Swordle', (props, ref) => {
  const { words, loading, error } = useSwordleData()

  return (
    <RenderComp root="div" forwardedRef={ref} props={{ ...props }}>
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
