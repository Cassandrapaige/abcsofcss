import React from 'react'
import Layout from '../boilerplates/Layout';

const Oo = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Oo'

            primary = '#9DD973'
            secondary = '#F26B83'
            complimentary = '#F2E966'
            contrast = '#F2B05E'

            family = 'opake, sans-serif'
            fontstyle= 'normal'
            weight= '900'

            selector = '.btn'
            method = '::before { content: " ";'
            link = 'https://twitter.com/CassandraPaigee'
            exp = '::before is a pseudo element which allows you to insert content onto a page from CSS (without it needing to be in the HTML). While the end result is not actually in the DOM, it appears on the page as if it is.'
            />
        </div>
        </>
    )
}

export default Oo;