import React from 'react'

const Codesnippet = (props) => {
    return (
        <>
        <h4 style={{ color: props.secondary}} className="selector">{ props.selector }</h4>
        <h3 className='method' style={{ color: props.primary }}>{ props.method }</h3> 
        <a href={ props.link } target="_blank" rel="noopener noreferrer">
            <button style={{ color: props.complimentary, border: `solid 2px ${ props.complimentary }` }}>
            Example 
            </button>
        </a>
        <p style={{ backgroundColor: props.secondary }} className= 'exp'>{ props.exp }</p>
        </>
    )
}

export default Codesnippet;