import React from 'react'

export const Fonts = (props) => {
    return (
        <>
        <h3 style={{ color: props.secondary }}>font-family:
            <br /><span style={{ color: props.complimentary }}>{ props.family }</span></h3>
        <h3 style={{ color: props.secondary}}>font-style:
            <br /><span style={{ color: props.complimentary }}>{ props.fontstyle }</span></h3>
        <h3 style={{ color: props.secondary}}>font-weight:
            <br/><span style={{ color: props.complimentary }}>{ props.weight }</span></h3>
        </>
    )
}

export default Fonts;
