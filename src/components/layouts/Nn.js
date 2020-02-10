import React from 'react'
import Layout from '../Layout';

const Nn = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Nn'

            primary = '#F2C029'
            secondary = '#08748C'
            complimentary = '#023440'
            contrast = '#011826'

            family = 'navigo, sans-serif'
            fontstyle= 'normal'
            weight= '700'

            selector = '.card {'
            method = 'clip-path: polygon(0 0, 0% 100%, 100% 0); }'
            link = 'https://codepen.io/cassandraPaige/pen/abzGaZG'
            exp = 'Clip path is used for creating shapes, by specifying individual point positions along the X and Y axis. You can use it to clip an image or element, so that only the clipped portion of the element will be visible. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Nn;