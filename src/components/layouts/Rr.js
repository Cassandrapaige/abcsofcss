import React from 'react'
import Layout from '../boilerplates/Layout';

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

            selector = '.btn'
            method = '::before { content: " ";'
            link = 'https://twitter.com/CassandraPaigee'
            exp = '::before is a pseudo element which allows you to insert content onto a page from CSS (without it needing to be in the HTML). While the end result is not actually in the DOM, it appears on the page as if it is.'
            />
        </div>
        </>
    )
}

export default Rr;