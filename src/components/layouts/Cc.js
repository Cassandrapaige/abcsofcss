import React from 'react'
import Layout from '../boilerplates/Layout';

const Cc = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Cc'
            
            primary = '#00B7DC'
            secondary = '#FF90C4'
            complimentary = '#FFF073'
            contrast = '#DE88C8'

            family = 'cantarell, sans-serif'
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

export default Cc;