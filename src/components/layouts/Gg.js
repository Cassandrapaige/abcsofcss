import React from 'react'
import Layout from '../boilerplates/Layout';

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

            selector = '.btn'
            method = '::before { content: " ";'
            link = 'https://twitter.com/CassandraPaigee'
            exp = '::before is a pseudo element which allows you to insert content onto a page from CSS (without it needing to be in the HTML). While the end result is not actually in the DOM, it appears on the page as if it is.'
            />
        </div>
        </>
    )
}

export default Gg;