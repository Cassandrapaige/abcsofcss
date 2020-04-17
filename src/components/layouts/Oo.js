import React from 'react'
import Layout from '../layout/layout.component'
;

const Oo = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Oo'

            primary = '#6CD9CE'
            secondary = '#D93BA1'
            complimentary = '#2E2473'
            contrast = '#0AA66D'

            family = 'opake, sans-serif'
            fontstyle= 'normal'
            weight= '900'

            selector = 'h1 {'
            method = 'mix-blend-mode: screen; }'
            link = 'https://codepen.io/cassandraPaige/pen/jOEMMyp'
            exp = 'Use mix-blend-mode to define how various elements should blend with their backgrounds. Explore using different values to see how each one creates a different effect/ colour combination. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Oo;