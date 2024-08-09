import React, { useState } from 'react'
import { Link, Icon, Menu } from './index'
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
            <Menu icon='logo'></Menu>
        </nav>
    )
}

export default Navbar
