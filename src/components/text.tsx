type TextProps = {
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    font?: 'body' | 'accent' | 'display'
    color?: 'primary' | 'secondary' | 'accent'
    darkMode?: boolean
}


const Text = (props: TextProps) => {
    const size = props.size ? ` ${props.size}` : ''
    const font = props.font === 'body' || props.font === undefined ? '' : ` text-${props.font}`
    const color = props.color ? ` text-color-${props.color}` : ''
    const darkMode = props.darkMode ? ' dark-mode' : ''
    return `text${size}${font}${color}${darkMode}`
}

export default Text