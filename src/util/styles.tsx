import { Responsive } from './core'

export type StyleBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const SpacePropType = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '0', '1', '2', '3', '4', '5']
export type StyleSpace = (typeof SpacePropType)[number] | 'auto'

export type StyleBackgroundColor = 'background-color-1' | 'background-color-2' | 'background-color-3'

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

  //   // Typography
  //   textAlign?: Responsive<StyleTextAlign>
  //   textAllCaps?: Responsive<boolean>
  //   textColor?: Responsive<StyleTextColor>
  //   fontWeight?: Responsive<StyleFontWeight>
  //   fontSize?: StyleFontSize
  //   fontFamily?: StyleFontFamily
  //   fontSkin?: StyleFontSkin
  //   // Misc
  //   display?: Responsive<StyleDisplay>
  //   // Modes
  //   standardMode?: boolean
  //   darkMode?: boolean
  //   // compactMode?: boolean
  //   overflow?: Responsive<StyleOverflow>
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
  //   visuallyHidden: 'visually-hidden',
  //   textAlign: 'text-align',
  //   textColor: 'text-color',
  //   textAllCaps: 'text-all-caps',
  //   fontWeight: 'font-weight',
  //   fontSize: 'text',
  //   fontFamily: 'font',
  //   fontSkin: 'font-skin',
  //   standardMode: 'standard-mode',
  //   darkMode: 'dark-mode',
}
