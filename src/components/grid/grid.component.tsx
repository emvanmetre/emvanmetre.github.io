import { MinNativeRef } from '../../core/types/core.types'
import { CoreProps } from '../../core/types/utility'
import { RenderComp } from '../core/render-comp.component'
import { renderWithRef } from '../core/render-with-ref'

type Props = { dividers?: boolean }

export type GridContainerProps = CoreProps<JSX.IntrinsicElements['div'], HTMLDivElement, Props>

const GridContainer = renderWithRef<MinNativeRef, GridContainerProps>('GridContainer', (props, ref) => {
  const { children, dividers, ...rest } = props

  const classNames = new Set<string>(['grid-container'])
  if (dividers) {
    classNames.add(`grid-container-dividers`)
  }
  return (
    <RenderComp root="div" classNames={classNames} forwardedRef={ref} props={{ ...rest }}>
      {children}
    </RenderComp>
  )
})

export default GridContainer
