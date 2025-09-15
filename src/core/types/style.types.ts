// Space & Display Types

export type StyleBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const SpacePropType = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '0', '1', '2', '3', '4', '5']
export type StyleSpace = (typeof SpacePropType)[number] | 'auto'

export type StyleDisplay =
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'table'
  | 'inline-table'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row-group'
  | 'table-row'
  | 'flow-root'
  | 'grid'
  | 'inline-grid'
  | 'contents'
  | 'list-item'
  | 'none'

export type StyleOverflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'inherit' | 'initial' | 'revert' | 'unset'

// Color Types

export type StyleBackgroundColor = 'background-color-1' | 'background-color-2' | 'background-color-3'
export type StyleTextColor = 'accent' | 'standard' | 'info' | 'subtle' | 'success' | 'warning'

// Typography Types

export type StyleTextAlign = 'standard' | 'left' | 'center' | 'right'
export type StyleFontWeight = 'bold' | 'normal'

export type StyleFontSize = 'x4large' | 'x3large' | 'x2large' | 'xlarge' | 'large' | 'standard' | 'small' | 'xsmall'

export type StyleFontFamily = 'primary' | 'secondary'
export type StyleFontSkin =
  | 'title-display'
  | 'title-headline'
  | 'title-section'
  | 'title-subsection'
  | 'title-item'
  | 'editorial-headline'
  | 'editorial-content'
  | 'body-standard'
  | 'body-standard-bold'
  | 'body-small'
  | 'body-small-bold'
  | 'footnote'
  | 'footnote-bold'
