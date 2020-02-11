import React from 'react'
import Layout from '../Layout';

const Aa = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Aa'
             
            primary = '#D96AA7'
            secondary = '#422C73'
            complimentary = '#88BFB5'
            contrast = '#F2E527'

            family = 'alfarn, sans-serif'
            fontstyle= 'normal'
            weight= '700'

            selector = ':nth-of-type(1) {'
            method = 'background: #D96AA7; }'
            link = 'https://codepen.io/cassandraPaige/pen/NWPOwXy'
            exp = 'The :nth-of-type selector allows you to use numbers, keywords and formulas to target specific elements based on their position in the DOM tree. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Aa;
