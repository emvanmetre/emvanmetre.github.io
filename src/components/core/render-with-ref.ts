import { forwardRef, ForwardRefRenderFunction, PropsWithoutRef } from 'react'

export function renderWithRef<T, P>(displayName: string, renderFun: ForwardRefRenderFunction<T, PropsWithoutRef<P>>) {
  const component = forwardRef(renderFun)
  component.displayName = `WithRef(${displayName})`
  return component
}
