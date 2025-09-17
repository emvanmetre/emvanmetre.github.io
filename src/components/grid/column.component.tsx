import { MinNativeRef } from '../../core/types/core.types'
import { CoreProps } from '../../core/types/utility'
import { RenderComp } from '../core/render-comp.component'
import { renderWithRef } from '../core/render-with-ref'

type Props = {}

export type ColumnProps = CoreProps<JSX.IntrinsicElements['div'], HTMLDivElement, Props>

const Column = renderWithRef<MinNativeRef, ColumnProps>('Column', (props, ref) => {
  const { children, ...rest } = props

  const classNames = new Set<string>(['grid-column'])

  return (
    <RenderComp root="div" classNames={classNames} forwardedRef={ref} props={{ ...rest }}>
      {children}
    </RenderComp>
  )
})

export default Column
