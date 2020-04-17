import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.styles.scss'

export const Navbar = (props) => {
    return (
    <nav className='nav'>
        <ul className="nav__list">
        <NavLink to="/" id='logo'> A to Z </NavLink>

        <a href="#colors" id = "colorsNav">
            <li style={{ color: props.primary }} 
                className="nav__list__item">
                Colors
            </li>
                </a>
        <a href="#fonts" id = "fontsNav">
            <li style={{ color: props.secondary }} 
                className="nav__list__item">
                Fonts
            </li>
        </a>
        <a href="#cssTip" id = "cssTipNav">
            <li style={{ color: props.complimentary }} 
                className ="nav__list__item">
                CSS
            </li>
        </a>
        <a href = "#" onClick = { props.renderNav } id= "hamburgerNav">
        <li className ="nav__list__item" >

        { props.showNav ? 
            <i className="fas fa-times"></i>
            : <i className="fas fa-bars"></i>}
        </li>
        </a>
    </ul>
</nav>
)}

export default Navbar;