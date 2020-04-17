import React from 'react'

import './color.styles.scss'

const Colors = (props) => {
    return (
        <>
            <div style={{ backgroundColor: props.primary }} className="color_item">{ props.primary } </div>
            <div style={{ backgroundColor: props.secondary }} className="color_item">{ props.secondary }</div>
            <div style={{ backgroundColor: props.complimentary }} className="color_item">{ props.complimentary }</div>
            <div style={{ backgroundColor: props.contrast }} className="color_item">{ props.contrast }</div>
        </>
    )
}

export default Colors;
