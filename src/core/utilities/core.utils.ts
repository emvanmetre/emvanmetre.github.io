import { CoreStyleProps } from '../types/style.types'
import { isValidStyleProperty } from '../types/styles'

/**
 * Remove core props, including className, from a given set of props
 */
export function removeCoreProps<P extends CoreStyleProps>(props: P) {
  const filteredPropsEntries = Object.entries(props).filter(([key]) => !isValidStyleProperty(key) && !isValidNonStyleCoreProp(key))
  return Object.fromEntries(filteredPropsEntries)
}

// TODO: v4 remove className and children
const commonPropKeys = new Set(['as', 'component', 'render', 'swanStyle', 'className', 'children', '__dangerouslySuppressWarning'])
function isValidNonStyleCoreProp(key: string): boolean {
  return commonPropKeys.has(key)
}
