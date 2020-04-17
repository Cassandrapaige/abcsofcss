import React from 'react'
import Layout from '../layout/layout.component'
;

const Vv = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Vv'

            primary = '#00C2B5'
            secondary = '#FF0150'
            complimentary = '#FFDB00'
            contrast = '#303740'

            family = 'vatican, sans-serif'
            fontstyle= 'normal'
            weight= '300'

            selector = '::selection {'
            method = 'background-color: #00C2B5; }'
            link = 'https://codepen.io/cassandraPaige/pen/bGNMmga'
            exp = 'The ::selection pseudo element is used to change the background color of highlighted text. You can simply attach it to the root of the document to apply the same background color to each element on the page, or add it to individual elements depending on your purpose. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Vv;