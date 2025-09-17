import { MinNativeRef } from '../../core/types/core.types'
import { CoreProps } from '../../core/types/utility'
import { RenderComp } from '../core/render-comp.component'
import { renderWithRef } from '../core/render-with-ref'
import { SwordleContextProvider, useSwordleData } from './swordle.context'
import SwordleInternal from './swordle-internal.component'

type Props = {}

export type SwordleProps = CoreProps<JSX.IntrinsicElements['div'], HTMLDivElement, Props>

const Swordle = renderWithRef<MinNativeRef, SwordleProps>('Swordle', (props, ref) => {
  const { children, ...rest } = props

  const { words, ...internalProps } = useSwordleData()

  return (
    <SwordleContextProvider wordList={words}>
      <RenderComp root="div" forwardedRef={ref} props={{ ...rest }}>
        {children}
        <SwordleInternal words={words} {...internalProps} />
      </RenderComp>
    </SwordleContextProvider>
  )
})

export default Swordle
