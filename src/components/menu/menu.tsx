import React from 'react'
import { Icon, Popover } from '../'
import { Button, Menu as AriaMenu, MenuTrigger } from 'react-aria-components'
import type { MenuProps as AriaMenuProps, MenuTriggerProps } from 'react-aria-components'

interface MenuProps<T>
  extends AriaMenuProps<T>, Omit<MenuTriggerProps, 'children'> {
  label?: string
  icon?: string
  buttonColor?: 'primary' | 'secondary' | 'tertiary' | 'blank'
  iconColor?: 'white' | 'medpurple' | 'lightpurple' | 'darkpurple'
  darkMode?: boolean
  children?: React.ReactNode
}

const iconColorsLight = {
  'button-primary': 'white',
  'button-secondary': 'medpurple',
  'button-tertiary': 'medpurple',
  'button-blank': 'medpurple',
}
const iconColorsDark = {
  'button-primary': 'lightpurple',
  'button-secondary': 'white',
  'button-tertiary': 'white',
  'button-blank': 'lightpurple',
}

function Menu<T extends object>(
  { label, icon, children, ...props }: MenuProps<T>
) {
  const buttonColor = props.buttonColor ? `button-${props.buttonColor}` : 'button-primary'
  const iconColor = props.iconColor ?? props.darkMode ? iconColorsDark[buttonColor] : iconColorsLight[buttonColor]
  return (
    <MenuTrigger {...props}>
      <Button className={`button ${buttonColor}${props.darkMode ? ' button-dark' : ''}`}>
        <Icon svg={icon} color={iconColor}></Icon>
        {label}
        </Button>
      <Popover>
        <AriaMenu {...props}>
          {children}
        </AriaMenu>
      </Popover>
    </MenuTrigger>
  );
}

export default Menu