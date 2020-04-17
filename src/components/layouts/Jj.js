import React from 'react'
import Layout from '../layout/layout.component'
;

const Jj = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Jj'

            primary = '#04ADBF'
            secondary = '#F23D5E'
            complimentary = '#025E73'
            contrast = '#F26389'

            family = 'joost, sans-serif'
            fontstyle= 'normal'
            weight= '400'

            selector = '.section {'
            method = 'background: linear-gradient(); }'
            link = 'https://codepen.io/cassandraPaige/pen/OJPMyQQ'
            exp = 'By default, a linear-gradient creates a background image consiting of a smooth transition between 2 or more colours, along a straight line. You can specify the direction that you wish your gradient to go in, as well as colour-stops, to create a more unique background image. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Jj;