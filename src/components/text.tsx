import { Text as AriaText } from "react-aria-components"
import type { TextProps as AriaTextProps } from "react-aria-components"


interface TextProps<T>
  extends Omit<AriaTextProps, 'children'> {
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    font?: 'body' | 'accent' | 'display'
    color?: string
    darkMode?: boolean
  children?: React.ReactNode
}

/**
 * @param TextProps Optional text properties:
 * - `size` - 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'
 * - `font` - 'body', 'accent', 'display'
 * - `color` - any color token separated by hyphens (e.g. `colors-purple-100`)
 * - `darkMode` - `boolean`
 */
function Text<T extends object>(
    { size, font, color, darkMode, ...props }: TextProps<T>
  ) {
    const sizeClass = size ? ` ${size}` : ''
    const fontClass = font === 'body' || font === undefined ? '' : ` text-${font}`
    const slotClass = props.slot === 'label' || props.slot === undefined ? '' : ` text-${props.slot}`
    const colorClass = color ? ` text-color-${color}` : ''
    const darkModeClass = darkMode ? ' dark-mode' : ''
    
    return (<AriaText className={`text${sizeClass}${fontClass}${slotClass}${colorClass}${darkModeClass}`}>
        {props.children}
    </AriaText>)
}

export default Text