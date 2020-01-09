import React from 'react'
import Layout from '../boilerplates/Layout';

const Nn = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Nn'

            primary = '#F2C029'
            secondary = '#08748C'
            complimentary = '#023440'
            contrast = '#011826'

            family = 'navigo, sans-serif'
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

export default Nn;