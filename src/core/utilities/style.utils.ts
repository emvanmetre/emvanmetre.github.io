import { CoreStyleProps, StyleBreakpoints } from '../types/style.types'
import { isValidStyleProperty, StyleProps, StylePropsValues } from '../types/styles'
import { getClassName } from '../types/utility'
import { iterToSet } from './transform.utils'

export function processStyleProps(props: CoreStyleProps, defaultClassNameSet?: Iterable<string> | null): Set<string> {
  let classNameSet = iterToSet(defaultClassNameSet)
  if (props.style) {
    const style = props.style
    responsiveModifierSet.forEach(modifier => {
      const modifierValue = style[modifier]
      if (modifierValue) {
        classNameSet = processResponsiveStyleProps(modifierValue, modifier, classNameSet)
      }
    })
    // This only process top level ResponsiveProps, inside Style
    classNameSet = processResponsiveStyleProps(props.style, 'xs', classNameSet)
  }
  // This only process top level ResponsiveProps
  processResponsiveStyleProps(props, 'xs', classNameSet)
  return classNameSet
}

function processResponsiveStyleProps<T extends StyleProps>(props: T, defaultResponsiveModifier: StyleBreakpoints, classNameSet: Set<string> = new Set()): Set<string> {
  Object.keys(props).forEach(propKey => {
    if (!isValidStyleProperty(propKey)) {
      return null // exit iteration
    }
    if (typeof props[propKey] === 'object') {
      // Key must be a modifier
      const responsiveValue = props[propKey] as Record<StyleBreakpoints, StylePropsValues> // eg: {xs: 1, md: 2}
      Object.keys(responsiveValue).forEach(modifier => {
        if (isResponsiveModifier(modifier)) {
          updateClassNameSet(propKey, responsiveValue[modifier], modifier, classNameSet)
        }
      })
    } else {
      updateClassNameSet(propKey, props[propKey], defaultResponsiveModifier, classNameSet)
    }
  })
  return classNameSet
}

export const responsiveModifierSet = new Set<StyleBreakpoints>(['xs', 'sm', 'md', 'lg', 'xl'])

export function isResponsiveModifier(key: string): key is StyleBreakpoints {
  return responsiveModifierSet.has(key as StyleBreakpoints)
}

function updateClassNameSet(key: keyof StyleProps, value: StylePropsValues, modifier: StyleBreakpoints, classNamesSet: Set<string>): Set<string> {
  const cname = getClassName(key, value, modifier)
  if (cname) {
    classNamesSet.add(cname)
  }
  return classNamesSet
}
