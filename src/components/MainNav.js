import React from 'react'
import NavItem from './NavItem';

const MainNav = (props) => {
    return (
        <nav id='layout-navbar'>
            <h4> Explore the <span style={{ color: props.contrast }} >menu</span> below or</h4>
            <h2>Click any letter on your keyboard to get started.</h2>
            <ol className="navbar-nav">
            <div>
                <NavItem letter = "Aa" link = " :nth-of-type" contrast = { props.contrast } />
                <NavItem letter = "Bb" link = " overflow: hidden" contrast = { props.contrast }/>
                <NavItem letter = "Cc" link = " background-clip" contrast = { props.contrast }/>
                <NavItem letter = "Dd" link = " text-shadow" contrast = { props.contrast }/>
                <NavItem letter = "Ee" link = " writing-mode" contrast = { props.contrast }/>
                <NavItem letter = "Ff" link = " SVG fill color" contrast = { props.contrast }/>
                <NavItem letter = "Gg" link = " background-attachment" contrast = { props.contrast } />
            </div>
            <div>
                <NavItem letter = "Hh" link = " transform: translate" contrast = { props.contrast }/>
                <NavItem letter = "Ii" link = " ::first-line" contrast = { props.contrast }/>
                <NavItem letter = "Jj" link = " linear-gradient" contrast = { props.contrast }/>
                <NavItem letter = "Kk" link = " transform: rotate" contrast = { props.contrast }/>
                <NavItem letter = "Ll" link = " filter" contrast = { props.contrast }/>
                <NavItem letter = "Mm" link = " position: sticky" contrast = { props.contrast }/>
                <NavItem letter = "Nn" link = " clip-path" contrast = { props.contrast }/>
            </div>
            <div>
                <NavItem letter = "Oo" link = " mix-blend-mode" contrast = { props.contrast }/>
                <NavItem letter = "Pp" link = " :focus" contrast = { props.contrast }/>
                <NavItem letter = "Qq" link = " text-stroke " contrast = { props.contrast }/>
                <NavItem letter = "Rr" link = " :checked" contrast = { props.contrast }/>
                <NavItem letter = "Ss" link = " transform: skew" contrast = { props.contrast }/>
                <NavItem letter = "Tt" link = " grid-column" contrast = { props.contrast }/>
                <NavItem letter = "Uu" link = " scrollbar-width" contrast = { props.contrast }/>
            </div>
            <div>
                <NavItem letter = "Vv" link = " ::selection" contrast = { props.contrast }/>
                <NavItem letter = "Ww" link = " repeating-linear-gradient" contrast = { props.contrast }/>
                <NavItem letter = "Xx" link = " repeating-conic-gradient" contrast = { props.contrast }/>
                <NavItem letter = "Yy" link = " transform: scale" contrast = { props.contrast }/>
                <NavItem letter = "Zz" link = " ::before" contrast = { props.contrast }/>
            </div>

            </ol>
            <h3>Your goal is to design and create 26 websites using the provided colour palettes, font-families and CSS rules. </h3>
            <p>** Bonus points if your theme starts with the corresponding letter.</p>
        </nav>
    )
}

export default MainNav;