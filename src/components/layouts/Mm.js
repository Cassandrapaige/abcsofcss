import React from 'react'
import Layout from '../layout/layout.component'
;

const Mm = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Mm'

            primary = '#038C8C'
            secondary = '#022859'
            complimentary = '#F7689D'
            contrast = '#B571AC'

            family = 'macha, sans-serif'
            fontstyle= 'normal'
            weight= '400'

            selector = '.container {'
            method = 'position: sticky; }'
            link = 'https://codepen.io/cassandraPaige/pen/oNgmbyx'
            exp = 'Sticky positioning treats an elements as if were relatively positionend on the page until it reaches a certain threshold and "sticks" itself in position. It remains "stuck" to the page until it has scrolled through the containers remaining contents. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Mm;