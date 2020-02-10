import React from 'react'
import Layout from '../Layout';

const Cc = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Cc'
            
            primary = '#D9296A'
            secondary = '#020873'
            complimentary = '#F2E74B'
            contrast = '#F28F38'

            family = 'cantarell, sans-serif'
            fontstyle= 'normal'
            weight= '700'

            selector = 'h1 {'
            method = '-webkit-background-clip: text };'
            link = 'https://codepen.io/cassandraPaige/pen/JjoypXB'
            exp = 'Background-clip is used to clip an elements background to its surrounding border or content-box. In this case we have clipped it to the foreground text, which has allowed us to add a subtle animation to the texts background. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Cc;