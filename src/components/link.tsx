import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link as ReactAriaLink } from 'react-aria-components'
import { Text } from './index'
import '../style.css'

/**
 * @param to - url or relative url the link redirects to
 * @param target - link opens to a window of type:
 * - `_self` - same window
 * - `_blank` - new window
 * - `_parent` - parent browsing context (if none, defaults to `_self`)
 */
type LinkProps = {
    darkMode?: boolean
    to: string
    target?: '_self' | '_blank' | '_parent'
    type?: 'standard' | 'nav' | 'nav-menu'
    selected?: boolean
    ariaLabel?: string
    children?: React.ReactNode
}

const Link = (props: LinkProps) => {
    const classNames = `link${props.darkMode ? ' link-dark' : ''}`
    if (props.type === 'nav' || props.type === 'nav-menu') {
        return (
            <NavLink
                to={props.to}
                className={`${classNames} ${props.type}-link${props.selected ? ' selected' : ''}`}
                target="_self"
                aria-label={props.ariaLabel}
            >
                {props.children}
            </NavLink>
        )
    } else {
        return (
            <ReactAriaLink
                href={props.to}
                className={classNames}
                target={props.target ?? '_self'}
                aria-label={props.ariaLabel}
            >
                {props.children}
            </ReactAriaLink>
        )
    }
}

export default Link
