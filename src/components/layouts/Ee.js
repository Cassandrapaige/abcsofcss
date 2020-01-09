import React from 'react'
import Layout from '../boilerplates/Layout';

const Ee = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Ee'

            primary = '#F04B70'
            secondary = '#521C59'
            complimentary = '#BFB4B0'
            contrast = '#7A398C'

            family = 'ebony, sans-serif'
            fontstyle= 'normal'
            weight= '400'

            selector = '.btn'
            method = '::before { content: " ";'
            link = 'https://twitter.com/CassandraPaigee'
            exp = '::before is a pseudo element which allows you to insert content onto a page from CSS (without it needing to be in the HTML). While the end result is not actually in the DOM, it appears on the page as if it is.'
            />
        </div>
        </>
    )
}

export default Ee;