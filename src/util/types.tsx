import { StyleBreakpoints } from './styles'
export type Responsive<T> = T | Partial<Record<StyleBreakpoints, T>>
