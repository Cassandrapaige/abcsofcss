import React from 'react'
import Layout from '../boilerplates/Layout';

const Xx = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Xx'

            primary = '#62CDD9'
            secondary = '#F29BB2'
            complimentary = '#0396A6'
            contrast = '#F2AEBB'

            family = 'xenera, sans-serif'
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

export default Xx;