import React from 'react'
import NavItem from '../nav-item/nav-item.component'

import './main-nav.styles.scss' 

const MainNav = ({contrast}) => {
    return (
        <nav id='layout-navbar'>
            <h4> Explore the <span style={{ color: contrast }} >menu</span> below or</h4>
            <h2>Click any letter on your keyboard to get started.</h2>
            <ol className="navbar-nav">
            <div>
                <NavItem letter = "Aa" text = " :nth-of-type" contrast = { contrast } />
                <NavItem letter = "Bb" text = " overflow: hidden" contrast = { contrast }/>
                <NavItem letter = "Cc" text = " background-clip" contrast = { contrast }/>
                <NavItem letter = "Dd" text = " text-shadow" contrast = { contrast }/>
                <NavItem letter = "Ee" text = " writing-mode" contrast = { contrast }/>
                <NavItem letter = "Ff" text = " SVG fill color" contrast = { contrast }/>
                <NavItem letter = "Gg" text = " background-attachment" contrast = { contrast } />
            </div>
            <div>
                <NavItem letter = "Hh" text = " transform: translate" contrast = { contrast }/>
                <NavItem letter = "Ii" text = " ::first-line" contrast = { contrast }/>
                <NavItem letter = "Jj" text = " linear-gradient" contrast = { contrast }/>
                <NavItem letter = "Kk" text = " transform: rotate" contrast = { contrast }/>
                <NavItem letter = "Ll" text = " filter" contrast = { contrast }/>
                <NavItem letter = "Mm" text = " position: sticky" contrast = { contrast }/>
                <NavItem letter = "Nn" text = " clip-path" contrast = { contrast }/>
            </div>
            <div>
                <NavItem letter = "Oo" text = " mix-blend-mode" contrast = { contrast }/>
                <NavItem letter = "Pp" text = " :focus" contrast = { contrast }/>
                <NavItem letter = "Qq" text = " text-stroke " contrast = { contrast }/>
                <NavItem letter = "Rr" text = " :checked" contrast = { contrast }/>
                <NavItem letter = "Ss" text = " transform: skew" contrast = { contrast }/>
                <NavItem letter = "Tt" text = " grid-column" contrast = { contrast }/>
                <NavItem letter = "Uu" text = " scrollbar-width" contrast = { contrast }/>
            </div>
            <div>
                <NavItem letter = "Vv" text = " ::selection" contrast = { contrast }/>
                <NavItem letter = "Ww" text = " repeating-linear-gradient" contrast = { contrast }/>
                <NavItem letter = "Xx" text = " repeating-conic-gradient" contrast = { contrast }/>
                <NavItem letter = "Yy" text = " transform: scale" contrast = { contrast }/>
                <NavItem letter = "Zz" text = " ::before" contrast = { contrast }/>
            </div>

            </ol>
            <h3>Your goal is to design and create 26 websites using the provided colour palettes, font-families and CSS rules. </h3>
            <p>** Bonus points if your theme starts with the corresponding letter.</p>
        </nav>
    )
}

export default MainNav;