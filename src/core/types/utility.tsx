import { PropsWithoutRef } from 'react'
import { MinNativeRef, MinNativeProps, CoreRenderProps } from './core.types'
import { CoreStyleProps, StyleBreakpoints } from './style.types'
import { getKey, StyleProps, StylePropsValues } from './styles'

export type Responsive<T> = T | Partial<Record<StyleBreakpoints, T>>

export type CoreProps<
  DefaultNativeProps extends object,
  Ref = MinNativeRef,
  CustomProps extends object = object,
  NativeProps extends object = MinNativeProps,
> = PropsWithoutRef<DefaultNativeProps> & CustomProps & CoreStyleProps & CoreRenderProps<Ref, NativeProps>

export function getClassName(key: keyof StyleProps, value: StylePropsValues, modifier: StyleBreakpoints = 'xs'): string | null {
  if (value === undefined || value === null) {
    return null
  }
  const effectiveKey = getKey(key)
  if (!effectiveKey) return null
  const prefix = `swan-${effectiveKey}`
  const suffix = modifier === 'xs' ? '' : `-${modifier}`

  switch (typeof value) {
    case 'boolean':
      return value ? prefix + suffix : null
    default:
      return prefix + `-${value}` + suffix
  }
}

export function updateClassNameSet(key: keyof StyleProps, value: StylePropsValues, modifier: StyleBreakpoints, classNamesSet: Set<string>): Set<string> {
  const cname = getClassName(key, value, modifier)
  if (cname) {
    classNamesSet.add(cname)
  }
  return classNamesSet
}
