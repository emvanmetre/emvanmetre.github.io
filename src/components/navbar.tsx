import React, { useState } from 'react'
import {Link} from './index'
import '../styles/navbar.scss'

const Navbar = () => {
    const classNames = new Set(['nav'])
    return (
        <nav className={classNames.toString()}>
            <Link to="/" type="nav">
                Elizabeth Van Metre
            </Link>
            <Link to="/about" type="nav">
                About
            </Link>
        </nav>
    )
}

export default Navbar
