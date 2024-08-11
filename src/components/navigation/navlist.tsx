import React from "react"

type NavListProps = {
    children?: React.ReactNode
}

const NavList = (props: NavListProps) => {
    return (
    <div className="nav-list">
        {props.children}
    </div>
    )
    
}

export default NavList