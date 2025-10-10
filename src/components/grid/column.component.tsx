import { MinNativeRef } from '../../core/types/core.types'
import { CoreProps } from '../../core/types/utility'
import { RenderComp } from '../core/render-comp.component'
import { renderWithRef } from '../core/render-with-ref'

type Props = {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 // default is auto
}

export type ColumnProps = CoreProps<JSX.IntrinsicElements['div'], HTMLDivElement, Props>

const Column = renderWithRef<MinNativeRef, ColumnProps>('Column', (props, ref) => {
  const { children, size, ...rest } = props

  const classNames = new Set<string>(['grid-column'])
  if (size) {
    classNames.add(`grid-column-${size}`)
  }

  return (
    <RenderComp root="div" classNames={classNames} forwardedRef={ref} props={{ ...rest }}>
      {children}
    </RenderComp>
  )
})

export default Column
