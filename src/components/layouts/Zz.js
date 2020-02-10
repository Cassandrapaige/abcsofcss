import React from 'react'
import Layout from '../Layout';

const Zz = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Zz'

            primary = '#5BD9D9'
            secondary = '#D91A4D'
            complimentary = '#260104'
            contrast = '#F2C4E2'

            family = 'zebrawood-std-fill, sans-serif'
            fontstyle= 'normal'
            weight= '400'

            selector = '::before { '
            method = "content: ' '; }"
            link = 'https://codepen.io/cassandraPaige/pen/QWwrzbN'
            exp = 'The ::before and ::after psuedo selectors allow you to render elements to the page using CSS, and position them relevant to their parent element. These elements are not visible in the DOM tree, however they appear on the page as if they were. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Zz;