import React from 'react'

const Header = (props) => {
    return (
         <header style={{ backgroundColor: props.secondary }} className='header'>
            <h1 style={{ color: props.primary, fontFamily: props.family}} 
                className='letter'> { props.letter } 
            </h1>
        </header>
    )
}

export default Header;
