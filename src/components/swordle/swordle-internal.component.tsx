import { MinNativeRef } from '../../core/types/core.types'
import { CoreProps } from '../../core/types/utility'
import { RenderComp } from '../core/render-comp.component'
import { renderWithRef } from '../core/render-with-ref'
import { Text } from '../'

type Props = {}

export type SwordleInternalProps = Omit<CoreProps<JSX.IntrinsicElements['div'], HTMLDivElement, Props>, 'children'>

const SwordleInternal = renderWithRef<MinNativeRef, SwordleInternalProps>('Swordle', (props, ref) => {
  return (
    <RenderComp root="div" forwardedRef={ref} props={{ ...props }}>
      {/* Example: render the first word */}
      <Text>Loading...</Text>
    </RenderComp>
  )
})

export default SwordleInternal
