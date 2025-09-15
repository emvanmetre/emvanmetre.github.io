import { AriaAttributes, ComponentRef, CSSProperties, ElementType, ForwardedRef, ForwardRefExoticComponent, PropsWithChildren, ReactElement, ReactNode } from 'react'

// NP => Native Props
// ExtendedProps = Native Props
// DP => Derived Props
// P = All the props
// R =  ComponentRef<ElementType<NP>>

export type CoreRenderComp<R, NP extends object, P extends object> = {
  root: CoreValidComp<NP>
  forwardedRef?: ForwardedRef<R>
  props: P
  /**
   * @deprecated
   * List of prop keys to remove from the component props
   */
  propKeysToRemove?: Iterable<string> | null
  classNames?: null | Iterable<string>
}

export type CoreValidComp<NP extends object> = ElementType<NP> | ForwardRefExoticComponent<NP>

export type CoreRenderProps<R, NP extends object> = {
  as?: CoreValidComp<NP>
  component?: CoreValidComp<NP>
  render?: (prop: PropsWithChildren<NP>, ref?: ForwardedRef<R>) => null | ReactElement<any>
}

export type CoreRenderElementArg<R, NP extends object> = {
  root: CoreValidComp<NP>
  ref?: ForwardedRef<R>
  renderProps: CoreRenderProps<R, NP>
  props: NP
  children?: null | ReactNode
}

export type MinNativeProps = {
  className?: string
  id?: string
  role?: string
  tabIndex?: number
  hidden?: boolean
  style?: CSSProperties
} & AriaAttributes
export type MinNativeRef<NP = MinNativeProps> = ComponentRef<ElementType<NP>>
