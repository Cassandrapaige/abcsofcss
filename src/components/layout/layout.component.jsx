import React, { useState, useEffect } from 'react'

import Navbar from '../navbar/navbar.component'
import MainNav from '../main-nav/main-nav.component'
import Header from '../header/header.component'
import Colors from '../colors/colors.component'
import Fonts from '../fonts/fonts.component'
import Codesnippet from '../code-snippet/code-snippet.component'

const Layout = ({contrast, primary, ...rest}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => setIsOpen(!isOpen)

    const handleScroll = () => {
        const isPassedTop = window.pageYOffset > 900;
        if(isOpen && isPassedTop) {
            setIsOpen(false)
        }
    }

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll, true);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
      });

    return (    
    <>
    <Navbar primary = {primary}
        {...rest}
        renderNav = { toggleNav }
        showNav = { isOpen } />

{ isOpen && 
    <section className = 'navigation nav_slideIn' style = {{ background: contrast }}>
        <MainNav contrast = { contrast } />
    </section>   }
    
    <div id= 'layout-container'>        
        <Header 
            primary = {primary}
            {...rest}/> 

    <section id='colors'>
        <h2>Colors</h2>
        <Colors 
            contrast= {contrast} 
            primary = {primary} 
            {...rest} />
    </section>

    <section id='fonts' style={{ backgroundColor: primary }} >
        <Fonts {...rest}/>
    </section>

    <section id='cssTip'>
        <Codesnippet 
            primary = {primary} 
            {...rest} />
        </section>
    </div>
</>
)}




export default Layout;