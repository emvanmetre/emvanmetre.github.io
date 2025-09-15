/* eslint-disable @typescript-eslint/ban-ts-comment */

import { ReactElement } from 'react'
import { CoreRenderElementArg } from '../../core/types/core.types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderElem<R, NP extends object = object>({ root, ref, renderProps, props, children }: CoreRenderElementArg<R, NP>): ReactElement<any> | null {
  if (typeof renderProps.render === 'function') {
    return renderProps.render({ ...props, children }, ref)
  }

  const Element = renderProps.as || renderProps.component || root
  if (children !== null && children !== undefined) {
    return (
      // disable react warning: "A props object containing a "key" prop is being spread into JSX"
      // @ts-ignore
      <Element {...props} key={props.key} ref={ref}>
        {children}
      </Element>
    )
  }
  // @ts-ignore
  return <Element {...props} key={props.key} ref={ref} />
}
