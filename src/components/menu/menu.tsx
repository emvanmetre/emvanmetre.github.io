import React from 'react'
import { Icon, Popover } from '../'
import { Button, Menu as AriaMenu, MenuTrigger } from 'react-aria-components'
import type { MenuProps as AriaMenuProps, MenuTriggerProps } from 'react-aria-components'

interface MenuProps<T>
  extends AriaMenuProps<T>, Omit<MenuTriggerProps, 'children'> {
  label?: string
  icon?: string
  darkMode?: boolean
  children?: React.ReactNode
}

function Menu<T extends object>(
  { label, icon, children, ...props }: MenuProps<T>
) {
  return (
    <MenuTrigger {...props}>
      <Button className={`button${props.darkMode ? ' button-dark' : ''}`}>
        <Icon svg={icon} color={`${props.darkMode ? 'white' : 'purple'}`}></Icon>
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