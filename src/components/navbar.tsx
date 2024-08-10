import React, { useState } from 'react'
import { Link, Icon, Menu, MenuItem } from './index'
import '../styles/navbar.scss'

const Navbar = () => {
    return (
        <nav className={`nav`}>
            <Icon svg="logo" color="purple" size="md" />
            <Link to="/" type="nav" font="display" size="xs">
                Elizabeth Van Metre
            </Link>
            <Link to="/about" type="nav">
                About
            </Link>
            <Menu icon='menu' buttonColor='blank'>
                <MenuItem>
                
                </MenuItem>
            </Menu>
        </nav>
    )
}

export default Navbar
