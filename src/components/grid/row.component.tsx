import { MinNativeRef } from '../../core/types/core.types'
import { CoreProps } from '../../core/types/utility'
import { RenderComp } from '../core/render-comp.component'
import { renderWithRef } from '../core/render-with-ref'

type Props = {}

export type RowProps = CoreProps<JSX.IntrinsicElements['div'], HTMLDivElement, Props>

const Row = renderWithRef<MinNativeRef, RowProps>('Row', (props, ref) => {
  const { children, ...rest } = props

  const classNames = new Set<string>(['grid-row'])

  return (
    <RenderComp root="div" classNames={classNames} forwardedRef={ref} props={{ ...rest }}>
      {children}
    </RenderComp>
  )
})

export default Row
