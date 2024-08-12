import React from 'react'
import { Button, Icon, Popover } from '../'
import { Menu as ReactAriaMenu, MenuTrigger } from 'react-aria-components'
import type {
    MenuProps as ReactAriaMenuProps,
    MenuTriggerProps,
} from 'react-aria-components'

interface MenuProps<T>
    extends ReactAriaMenuProps<T>,
        Omit<MenuTriggerProps, 'children'> {
    label?: string
    icon?: string
    buttonColor?: 'primary' | 'secondary' | 'tertiary' | 'blank'
    iconColor?: string
    darkMode?: boolean
    children?: React.ReactNode
}

function Menu<T extends object>({
    label,
    icon,
    children,
    ...props
}: MenuProps<T>) {
    const buttonColor = props.buttonColor
        ? `button-${props.buttonColor}`
        : 'button-primary'
      const iconColor = props.iconColor
        ? `icon-color-${props.iconColor}`
        : ''
    return (
        <MenuTrigger {...props}>
            <Button
                className={`button ${buttonColor}${props.darkMode ? ' button-dark' : ''}`}
            >
                <Icon svg={icon} color={iconColor}></Icon>
                {label}
            </Button>
            <Popover skin="light" placement='bottom'>
                <ReactAriaMenu {...props}>{children}</ReactAriaMenu>
            </Popover>
        </MenuTrigger>
    )
}

export default Menu
