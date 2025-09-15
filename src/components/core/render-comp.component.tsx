import { PropsWithChildren } from 'react'
import { CoreRenderComp } from '../../core/types/core.types'
import { renderElem } from './render-element.util'
import { processStyleProps } from '../../core/utilities/style.utils'
import { removeCoreProps } from '../../core/utilities/core.utils'
import { setToString } from '../../core/utilities/types.utils'

export function RenderComp<R, NP extends object, P extends object>({ root, props, forwardedRef, classNames, children }: PropsWithChildren<CoreRenderComp<R, NP, P>>) {
  const classNameIter = processStyleProps(props, classNames)
  const classNameProp = (props as Record<string, string | undefined>).className
  if (classNameProp) classNameIter.add(classNameProp)

  const forwardedProps = {
    ...removeCoreProps(props),
    className: setToString(classNameIter),
  } as NP

  return renderElem<R, NP>({ root, ref: forwardedRef, renderProps: props, props: forwardedProps, children })
}
