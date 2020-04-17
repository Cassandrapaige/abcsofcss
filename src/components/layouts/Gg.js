import React from 'react'
import Layout from '../layout/layout.component'
;

const Gg = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Gg'

            primary = '#011526'
            secondary = '#03738C'
            complimentary = '#798C8C'
            contrast = '#024059'

            family = 'gothic-open-shaded, sans-serif'
            fontstyle= 'normal'
            weight= '400'

            selector = '.section {'
            method = 'background-attachment: fixed; }'
            link = 'https://codepen.io/cassandraPaige/pen/MWYGqvE'
            exp = 'Here we have used background-attachment to crate a parallax scrolling effect, specifying that we would like our images position to be fixed to the page. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Gg;