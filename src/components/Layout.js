import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
import MainNav from './MainNav.js'
import Header from './Header'
import Colors from './Colors'
import Fonts from './Fonts'
import Codesnippet from './Codesnippet'

class Layout extends Component {
    state = {
        showNav: false
    }

    renderNav = () => {
        this.setState({ 
            showNav: !this.state.showNav
        })
    }
    
    handleScrollChange = () => {
        const isPassedTop = window.pageYOffset  > 900;
        if (this.state.showNav && isPassedTop) {
          this.setState({ 
              showNav: false
            })
        }
    }

    componentDidMount = () => {
        document.addEventListener('scroll', this.handleScrollChange, true);
      }
    
    componentWillUnmount = () => {
        document.removeEventListener('scroll', this.handleScrollChange);
    }

    render() {

    const { primary, secondary, complimentary, contrast } = this.props;
    const { letter, family, fontstyle, weight, selector, method, exp, link } = this.props;

    return (
        <>
        <Nav 
            primary = { primary }
            secondary = { secondary }
            complimentary = { complimentary }
            renderNav = { this.renderNav }
            showNav = { this.state.showNav } />


        { this.state.showNav && 
            <section className = 'navigation nav_slideIn' style = {{ background: contrast }}>
                <MainNav contrast = { contrast } />
            </section>     
        }
    
<div id= 'layout-container'>
            
        <Header 
            primary = { primary }
            secondary = { secondary }
            family = { family }
            letter = { letter } /> 

    <section id='colors'>
        <h2>Colors</h2>
        <Colors 
            primary = { primary }
            secondary = { secondary }
            complimentary = { complimentary }
            contrast = { contrast } />
    </section>

    <section id='fonts'style={{ backgroundColor: primary }} >
        <Fonts 
            family = { family }
            fontstyle = { fontstyle }
            weight= { weight }
            secondary = { secondary }
            complimentary = { complimentary } />
    </section>

     <section id='cssTip'>
        <Codesnippet
            primary = { primary }
            secondary = { secondary }
            complimentary = { complimentary }
            selector = { selector }
            method = { method }
            link = { link }
            exp = { exp } />
    </section>
</div>
        </>
    )   
    }
}

export default Layout;