import { Button as ReactAriaButton } from "react-aria-components"
import type { ButtonProps as ReactAriaButtonProps } from "react-aria-components"
import '../../style.css'

interface ButtonProps<T>
    extends Omit<ReactAriaButtonProps, 'children'> {
        darkMode?: boolean
        children?: React.ReactNode
}

function Button<T extends object>({...props}: ButtonProps<T>) {
    return (
    <ReactAriaButton {...props}>

    </ReactAriaButton>
    )
}

export default Button