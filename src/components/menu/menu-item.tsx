import React from 'react'
import { MenuItem as AriaMenuItem } from 'react-aria-components'
import type { MenuItemProps as AriaMenuItemProps } from 'react-aria-components'
import { Text } from '../'


interface MenuItemProps
  extends Omit<AriaMenuItemProps, 'children'> {
    darkMode?: boolean
    children?: React.ReactNode
}

const MenuItem = (props: MenuItemProps) => {
    let textValue = props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined);
    return (
        <AriaMenuItem
          {...props}
          textValue={textValue}
          className={({ isFocused, isOpen }) =>
            `menu-item${isFocused ? ' focused' : ''}${isOpen ? ' open' : ''}${props.darkMode ? ' menu-item-dark-mode' : ''}${Text({size: 'xs', darkMode: props.darkMode})}`}
        >
          {({ hasSubmenu }) => (
            <>
              {props.children}
              {hasSubmenu && (
                <svg className="chevron" viewBox="0 0 24 24">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              )}
            </>
          )}
        </AriaMenuItem>
      )
}

export default MenuItem