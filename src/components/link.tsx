import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link as AriaLink } from 'react-aria-components'
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
    target? : '_self' | '_blank' | '_parent'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    font?: 'body' | 'accent' | 'display'
    type?: 'standard' | 'nav'
    ariaLabel?: string
    children?: React.ReactNode
}

const Link = (props: LinkProps) => {
    const classNames = `${Text({size: props.size, font: props.font})} link${props.darkMode ? ' dark-mode' : ''}`
    if ( props.type === 'nav') {
        return (
            <NavLink to={props.to} className={`${classNames} nav-link`} target='_self' aria-label={props.ariaLabel}>
                {props.children}
            </NavLink>
        )
    }
    else {
        return (
            <AriaLink href={props.to} className={classNames} target={props.target ?? '_self'} aria-label={props.ariaLabel}>
                {props.children}
            </AriaLink>
        )
    }
    
}

export default Link
