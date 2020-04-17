import React from 'react'
import Layout from '../layout/layout.component'
;

const Tt = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Tt'

            primary = '#F2BE22'
            secondary = '#752F5C'
            complimentary = '#271C40'
            contrast = '#D9048E'

            family = 'tachyon, sans-serif'
            fontstyle= 'normal'
            weight= '400'

            selector = '.img {'
            method = 'grid-column: 1/3; }'
            link = 'https://codepen.io/cassandraPaige/pen/abzGQOm'
            exp = 'Use grid-column to dynamically position elements on a page, by specifying their start and end positions. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Tt;