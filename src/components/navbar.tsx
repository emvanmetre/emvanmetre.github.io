import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-logo">
                NavBar
            </NavLink>
        </nav>
    )
}

export default Navbar