import React from 'react'
import Layout from '../Layout';

const Kk = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Kk'

            primary = '#D92949'
            secondary = '#6FB7BF'
            complimentary = '#F2DEA0'
            contrast = '#F26E50'

            family = 'kari-display-pro, sans-serif'
            fontstyle= 'normal'
            weight= '400'

            selector = '.item {'
            method = 'transform: rotate(360deg); }'
            link = 'https://codepen.io/cassandraPaige/pen/JjoZjYb'
            exp = 'Use rotate() to rotate an element by a specified degree. A positive angle will produce a clockwise rotation, whereas a negative angle will produce a counter-clockwise rotation. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Kk;