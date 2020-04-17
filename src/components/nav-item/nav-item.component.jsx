import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({letters, contrast, letter, text}) => {
        const renderLetter = (e) => e.slice(0, 1);

        return (
            <li className="navbar-item">
                <Link to= {letter } className='nav-link'>
                    <span style={{ color: contrast }}> 
                        { renderLetter(letter) })
                    </span>  
                    { text }
                </Link>
            </li>
        )
    }

export default NavItem;
