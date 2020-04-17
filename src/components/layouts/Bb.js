import React from 'react'
import Layout from '../layout/layout.component'
;

const Bb = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Bb'

            primary = '#F23D5E'
            secondary = '#F29F05'
            complimentary = '#ADBF69'
            contrast = '#F22233'

            family = 'balboa, sans-serif'
            fontstyle= 'normal'
            weight= '300'

            selector = '.container {'
            method = 'overflow: hidden; }'
            link = 'https://codepen.io/cassandraPaige/pen/MWYPQmm'
            exp= 'The overflow property determines what happens if an elements content is larger than its container element. Try removing overflow: hidden from the example, and notice how the car is no longer contained within its own container. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Bb;