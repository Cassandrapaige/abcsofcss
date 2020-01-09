import React from 'react'
import Layout from '../boilerplates/Layout';

const Ll = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Ll'

            primary = '#F2C641'
            secondary = '#D94A4A'
            complimentary = '#208C6E'
            contrast = '#84BFBF'

            family = 'latex, sans-serif'
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

export default Ll;