import React from 'react'
import Layout from '../layout/layout.component'
;

const Xx = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Xx'

            primary = '#BF2E97'
            secondary = '#2D39A1'
            complimentary = '#F2C335'
            contrast = '#05193A'

            family = 'xenera, sans-serif'
            fontstyle= 'normal'
            weight= '400'

            selector = '.container {'
            method = 'background: repeating-conic-gradient(); }'
            link = 'https://codepen.io/cassandraPaige/pen/GRgGLoz'
            exp = 'A conic-graident is used for creating pie charts or color wheels, which rotate around a center point. You can add multiple colours to your graident by using colour-stops, specified by an angle. Please note, that at this time, this example may only be available on Chrome. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Xx;