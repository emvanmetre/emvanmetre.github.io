import {
  StyleSpace,
  StyleBackgroundColor,
  StyleFontFamily,
  StyleFontSize,
  StyleFontWeight,
  StyleTextAlign,
  StyleTextColor,
  StyleFontSkin,
  StyleDisplay,
  StyleOverflow,
} from './style.types'
import { Responsive } from './utility'

export type StyleProps = {
  // Spacing
  margin?: Responsive<StyleSpace>
  m?: Responsive<StyleSpace>
  marginTop?: Responsive<StyleSpace>
  mt?: Responsive<StyleSpace>
  marginRight?: Responsive<StyleSpace>
  mr?: Responsive<StyleSpace>
  marginBottom?: Responsive<StyleSpace>
  mb?: Responsive<StyleSpace>
  marginLeft?: Responsive<StyleSpace>
  ml?: Responsive<StyleSpace>
  marginX?: Responsive<StyleSpace>
  mx?: Responsive<StyleSpace>
  marginY?: Responsive<StyleSpace>
  my?: Responsive<StyleSpace>
  padding?: Responsive<StyleSpace>
  p?: Responsive<StyleSpace>
  paddingTop?: Responsive<StyleSpace>
  pt?: Responsive<StyleSpace>
  paddingRight?: Responsive<StyleSpace>
  pr?: Responsive<StyleSpace>
  paddingBottom?: Responsive<StyleSpace>
  pb?: Responsive<StyleSpace>
  paddingLeft?: Responsive<StyleSpace>
  pl?: Responsive<StyleSpace>
  paddingX?: Responsive<StyleSpace>
  px?: Responsive<StyleSpace>
  paddingY?: Responsive<StyleSpace>
  py?: Responsive<StyleSpace>
  // Background
  backgroundColor?: Responsive<StyleBackgroundColor>
  bgc?: Responsive<StyleBackgroundColor>

  // Typography
  textAlign?: Responsive<StyleTextAlign>
  textAllCaps?: Responsive<boolean>
  textColor?: Responsive<StyleTextColor>
  fontWeight?: Responsive<StyleFontWeight>
  fontSize?: StyleFontSize
  fontFamily?: StyleFontFamily
  fontSkin?: StyleFontSkin
  // Misc
  display?: Responsive<StyleDisplay>
  // Modes
  standardMode?: boolean
  darkMode?: boolean
  compactMode?: boolean
  overflow?: Responsive<StyleOverflow>
  visuallyHidden?: Responsive<boolean>
}

export type StylePropsKeys = keyof StyleProps
export type StylePropsValues = StyleProps[StylePropsKeys]

export const stylePropertyPrefixes: Partial<Record<StylePropsKeys, string>> = {
  margin: 'm',
  marginTop: 'mt',
  marginRight: 'mr',
  marginBottom: 'mb',
  marginLeft: 'ml',
  marginX: 'mx',
  marginY: 'my',
  padding: 'p',
  paddingTop: 'pt',
  paddingRight: 'pr',
  paddingBottom: 'pb',
  paddingLeft: 'pl',
  paddingX: 'px',
  paddingY: 'py',
  backgroundColor: 'bgc',
  visuallyHidden: 'visually-hidden',
  textAlign: 'text-align',
  textColor: 'text-color',
  textAllCaps: 'text-all-caps',
  fontWeight: 'font-weight',
  fontSize: 'text',
  fontFamily: 'font',
  fontSkin: 'font-skin',
  standardMode: 'standard-mode',
  darkMode: 'dark-mode',
}

/**
 * An object requiring every single key in StyleProps
 *
 * This allows us to use `Object.keys` to get a type-safe array of all of the core style props
 */
const allStyleProps: Required<Record<StylePropsKeys, false>> = {
  margin: false,
  m: false,
  marginTop: false,
  mt: false,
  marginRight: false,
  mr: false,
  marginBottom: false,
  mb: false,
  marginLeft: false,
  ml: false,
  marginX: false,
  mx: false,
  marginY: false,
  my: false,
  padding: false,
  p: false,
  paddingTop: false,
  pt: false,
  paddingRight: false,
  pr: false,
  paddingBottom: false,
  pb: false,
  paddingLeft: false,
  pl: false,
  paddingX: false,
  px: false,
  paddingY: false,
  py: false,
  backgroundColor: false,
  bgc: false,
  textAlign: false,
  textAllCaps: false,
  textColor: false,
  fontWeight: false,
  fontSize: false,
  fontFamily: false,
  fontSkin: false,
  display: false,
  standardMode: false,
  darkMode: false,
  compactMode: false,
  overflow: false,
  visuallyHidden: false,
}

export const styleValidProperties = new Set(Object.keys(allStyleProps) as StylePropsKeys[])

export function isValidStyleProperty(key: string): key is StylePropsKeys {
  return styleValidProperties.has(key as StylePropsKeys)
}

export function getKey(key: string): string | null {
  if (isValidStyleProperty(key)) {
    return stylePropertyPrefixes[key] || key
  }
  return null
}
