import React from 'react'
import Layout from '../Layout';

const Ss = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Ss'

            primary = '#4ECDC4'
            secondary = '#FE6B6B'
            complimentary = '#556370'
            contrast = '#C54D57'

            family = 'sweater-school, sans-serif'
            fontstyle= 'normal'
            weight= '700'

            selector = 'section {'
            method = 'transform: skewY(12deg); }'
            link = 'https://codepen.io/cassandraPaige/pen/jOEKEOq'
            exp = 'Use skew() to distort an element by changing the direction of its angles, both horizontally and vertically. Here we have used skew() to create a slanted background effect on the footer element. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Ss;