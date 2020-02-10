import React from 'react'
import Layout from '../Layout';

const Rr = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Rr'

            primary = '#D5D95F'
            secondary = '#BF4588'
            complimentary = '#6321A6'
            contrast = '#04C4D9'

            family = 'restore, sans-serif'
            fontstyle= 'normal'
            weight= '700'

            selector = 'input:checked {'
            method = 'background-color: #04C4D9; }'
            link = 'https://codepen.io/cassandraPaige/pen/povKvLr'
            exp = 'The :checked pseudo-class targets radio buttons and checkboxes, applying styles to "active" elements. Check Mozilla for examples on how to use :checked to toggle an active class, depending on targets state. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Rr;