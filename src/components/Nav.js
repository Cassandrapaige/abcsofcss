import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul className="nav_list">
                <NavLink to="/login">
                    <li className="nav_brand">A to Z</li>
                </NavLink>
                <NavLink to="/login">
                    <li className="nav_list_item">Login</li>
                </NavLink>
                <NavLink to="/register">
                    <li className="nav_list_item">Sign Up</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Nav;
