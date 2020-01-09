import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Layout extends Component {

    render() {
    const repeat = (elem) => {
        let el = elem.repeat(2);
        let [x, y] = [el[0].toUpperCase(),el[1]];
        return `${x}${y}`;
    }
        
    const onKeypress = (e) => {
        if(e.key.length < 2 && /[a-zA-Z]/.test(e.key)) {
        window.location = `/${(repeat(e.key))}`
        }
    };
        
    window.addEventListener('keypress', onKeypress);

    const { primary, secondary, complimentary, contrast } = this.props;
    const { letter, family, fontstyle, weight, selector, method, exp, link } = this.props;

    return (
        <>
        <nav className='nav'>
            <ul className="nav__list">
                <NavLink to="/" id='logo'> A to Z </NavLink>

                <a href="#colors">
                    <li style={{ color: primary}} className="nav__list__item">Colors</li>
                </a>
                <a href="#fonts">
                    <li style={{ color: secondary}} className="nav__list__item">Fonts</li>
                </a>
                <a href="#cssTip">
                    <li style={{ color: complimentary}} className ="nav__list__item">CSS</li>
                </a>
            </ul>
        </nav>
        <div id= 'layout-container'>
            <header style={{ backgroundColor: secondary}} className='header'>
                <h1 style={{ color: primary, fontFamily: family}} className='letter'>{letter}</h1>
            </header>

            <section id='colors'>
            <h2>Colors</h2>
                <div style={{ backgroundColor:primary}} className="color_item">{primary}</div>
                <div style={{ backgroundColor:secondary}} className="color_item">{secondary}</div>
                <div style={{ backgroundColor:complimentary}} className="color_item">{complimentary}</div>
                <div style={{ backgroundColor:contrast}} className="color_item">{contrast}</div>
            </section>

            <section style={{ backgroundColor:primary}} id='fonts'>
                <h3 style={{ color: secondary}}>font-family:
                    <br /><span style={{ color: complimentary}}>{family}</span></h3>
                <h3 style={{ color: secondary}}>font-style:
                    <br /><span style={{ color: complimentary}}>{fontstyle}</span></h3>
                <h3 style={{ color: secondary}}>font-weight:
                    <br/><span style={{ color: complimentary}}>{weight}</span></h3>
            </section>

            <section id='cssTip'>
                <h4 style={{ color: secondary}} className="selector">{selector}</h4>
                <br/>  <h3 className='method'>{method}</h3> 
                

                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button style={{ color: complimentary, border: `solid 2px ${complimentary}` }}>
                        Example </button></a>
                <p style={{ backgroundColor:secondary}} className= 'exp'>{exp}</p>
            </section>
        </div>
        </>
    )   
    }
}

export default Layout;