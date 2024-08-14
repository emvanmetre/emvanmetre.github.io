import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { Link, Icon, Menu, MenuItem, NavList, Text } from '../index'
import '../../styles/navbar.scss'

type NavbarProps = {
    startInvisible?: boolean
    darkMode?: boolean
}

const Navbar = (props: NavbarProps) => {
    const [isSticky, setIsSticky] = useState(false);
    const [isInvis, setIsInvis] = useState(false);
    const makeSticky = () => {
        if (window.scrollY >= 20) {
            if (!isSticky) {
                setIsInvis(false)
            }
            setIsSticky(true)
        }
        else {
            if (isSticky) {
                setIsInvis(true)
            }
            setIsSticky(false)
        }
    }
    window.addEventListener("scroll", makeSticky)
    const startInvis = props.startInvisible ? ' nav-home' : ''
    const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
    const navColor = props.darkMode ? 'nav-dark-mode' : 'nav-light-mode'
    const navClasses = `nav${startInvis}${isSticky ? ' nav-sticky' : ''}${isInvis ? ' nav-invisible' : ''} ${navColor}`
    if (isScreenSmall) {
        return (
            <nav className={navClasses}>
                <NavList size="sm">
                    <Menu icon="menu" iconColor="colors-purple-600" buttonColor="blank">
                        <MenuItem isDisabled textValue='About'>
                            <Text slot="label">
                                    About
                                </Text>
                        </MenuItem>
                        <MenuItem isDisabled textValue='About 2'>
                            <Text slot="label">
                                    Experience
                                </Text>
                        </MenuItem>
                        <MenuItem isDisabled textValue='About 3'>
                             <Link to="/about" type="nav-menu">
                                <Text slot="label">
                                    Link 3
                                </Text>
                            </Link>
                        </MenuItem>
                    </Menu>
                </NavList>
                <Link to="/" type="nav">
                    <Icon svg="logo" size="md" color={`${props.darkMode ? 'colors-purple-600' : 'colors-purple-600'}`} />
                    <Text font="display" size="xs">
                        Elizabeth Van Metre
                    </Text>
                </Link>
                
            </nav>
        )
    } else {
        return (
            <nav className={navClasses}>
                <Link to="/" type="nav">
                    <Icon svg="logo" color="colors-purple-600" size="md" />
                    <Text font="display" size="xs">
                        Elizabeth Van Metre
                    </Text>
                </Link>
                <NavList>
                    <Link to="/about" type="nav">
                        <Text font="body" size="md" weight="bold">
                            About
                        </Text>
                    </Link>
                    <Link to="/about" type="nav">
                        <Text font="body" size="md" weight="bold">
                            Link 2
                        </Text>
                    </Link>
                </NavList>
                
            </nav>
        )
    }
}

export default Navbar
