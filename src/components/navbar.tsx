import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
    const classNames = new Set(['nav'])
    return (
        <nav className={classNames.toString()}>
            <NavLink to="/" className="nav-logo">
                Elizabeth Van Metre
            </NavLink>
        </nav>
    )
}

export default Navbar