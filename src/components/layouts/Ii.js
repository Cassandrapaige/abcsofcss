import React from 'react'
import Layout from '../Layout';

const Ii = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Ii'

            primary = '#F2B441'
            secondary = '#9A80BF'
            complimentary = '#F2507B'
            contrast = '#03A688'

            family = 'imperial-urw, sans-serif'
            fontstyle= 'normal'
            weight= '700'

            selector = 'p::first-line {'
            method = 'font-size: 40px; }'
            link = 'https://codepen.io/cassandraPaige/pen/JjomyZJ'
            exp = 'The ::first-line pseudo element will apply styles to the first line of a block-level element. Styles will adjust according to viewport size. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Ii;