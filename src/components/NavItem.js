import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = (props) => {
        const renderLetter = (e) => e.slice(0, 1);

        return (
            <li className="navbar-item">
                <NavLink to= { props.letter } className='nav-link'>
                <span style={{ color: props.contrast }}> 
                    { renderLetter(props.letter) })
                </span>  
                    { props.link }
                </NavLink>
            </li>
        )
    }

export default NavItem;
