import React from 'react'
import { NavLink } from 'react-router-dom'
import layout from '../../images/layout.png'
const Header = () => {
    return (
        <div className = 'homepage_header'>
            <div className="left_content">
                <h1>26 <span>Different</span> Layouts</h1>
                <h4>to help build your portfolio and boost your creativity</h4>
                <NavLink to = '/layout-nav'><button className='btn'>Explore</button></NavLink>
                <div className="circle"></div>
                <div className="zig-zag"></div>
            </div>

        <div className="right_content">
            <div className="inner">
                <img src={layout} alt="layout"/>
            </div>
        </div>
        </div>
    )
}
export default Header;