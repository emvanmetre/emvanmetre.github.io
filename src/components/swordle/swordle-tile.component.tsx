import { MinNativeRef } from '../../core/types/core.types'
import { CoreProps } from '../../core/types/utility'
import { RenderComp } from '../core/render-comp.component'
import { renderWithRef } from '../core/render-with-ref'

type Props = { color?: 'green' | 'yellow' | 'gray' | 'empty' | 'space' }

export type SwordleTileProps = CoreProps<JSX.IntrinsicElements['div'], HTMLDivElement, Props>

const SwordleTile = renderWithRef<MinNativeRef, SwordleTileProps>('SwordleTile', (props, ref) => {
  const { children, className, color, ...rest } = props

  const classNames = new Set<string>(['swordle-tile'])
  classNames.add(`swordle-tile-${color || 'gray'}`)

  return (
    <RenderComp root="div" classNames={classNames} forwardedRef={ref} props={{ ...rest }}>
      {children}
    </RenderComp>
  )
})

export default SwordleTile
