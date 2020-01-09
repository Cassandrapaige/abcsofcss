import React from 'react'
import Layout from '../boilerplates/Layout';

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

            selector = '.btn'
            method = '::before { content: " ";'
            link = 'https://twitter.com/CassandraPaigee'
            exp = '::before is a pseudo element which allows you to insert content onto a page from CSS (without it needing to be in the HTML). While the end result is not actually in the DOM, it appears on the page as if it is.'
            />
        </div>
        </>
    )
}

export default Vv;