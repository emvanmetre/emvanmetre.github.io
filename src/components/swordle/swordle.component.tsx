import { useMemo } from 'react'
import { MinNativeRef } from '../../core/types/core.types'
import { CoreProps } from '../../core/types/utility'
import { RenderComp } from '../core/render-comp.component'
import { renderWithRef } from '../core/render-with-ref'
import { SwordleContextProvider, SwordleContextValue } from './swordle.context'
import SwordleInternal from './swordle-internal.component'

type Props = {}

export type SwordleProps = CoreProps<JSX.IntrinsicElements['div'], HTMLDivElement, Props>

const Swordle = renderWithRef<MinNativeRef, SwordleProps>('Swordle', (props, ref) => {
  const { children, ...rest } = props

  const contextValue = useMemo<SwordleContextValue>(() => ({ currentWord: '' }), [])
  return (
    <SwordleContextProvider value={contextValue}>
      <RenderComp root="div" forwardedRef={ref} props={{ ...rest }}>
        <SwordleInternal />
        {children}
      </RenderComp>
    </SwordleContextProvider>
  )
})

export default Swordle
