import React, { useState } from 'react'
import { Link, Icon, Menu, MenuItem, Text } from './index'
import '../styles/navbar.scss'

const Navbar = () => {
    return (
        <nav className={`nav`}>
            <Link to="/" type="nav">
                <Icon svg="logo" color="colors-purple-600" size="md" />
                <Text font="display" size="xs">Elizabeth Van Metre</Text>
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
