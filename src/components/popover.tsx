import {
    Popover as AriaPopover,
    OverlayArrow,
    Dialog,
} from 'react-aria-components'
import type { PopoverProps as AriaPopoverProps } from 'react-aria-components'
import '../style.css'

interface PopoverProps extends Omit<AriaPopoverProps, 'children'> {
    skin?: 'light'
    children: React.ReactNode
    darkMode?: boolean
}

function Popover({ children, ...props }: PopoverProps) {
    const skinClass = props.skin ? ` popover-skin-${props.skin}` : ''

    return (
        <AriaPopover
            {...props}
            className={`popover${skinClass}${props.darkMode ? ' popover-dark' : ''}`}
        >
            <OverlayArrow>
                <svg width={12} height={12} viewBox="0 0 12 12">
                    <path d="M0 0 L6 6 L12 0" />
                </svg>
            </OverlayArrow>
            <Dialog>{children}</Dialog>
        </AriaPopover>
    )
}

export default Popover
