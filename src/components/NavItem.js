import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = (props) => {
        const renderLetter = (e) => e.slice(0, 1);

        return (
            <li className="navbar-item">
                     <Link to= {props.letter } className='nav-link'>
                <span style={{ color: props.contrast }}> 
                    { renderLetter(props.letter) })
                </span>  
                    { props.link }
                </Link>
            </li>
        )
    }

export default NavItem;
