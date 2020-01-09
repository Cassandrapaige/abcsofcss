import React from 'react'
import Layout from '../boilerplates/Layout';

const Pp = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Pp'

            primary = '#D64776'
            secondary = '#6A5385'
            complimentary = '#45556B'
            contrast = '#4D8A77'

            family = 'aralucent, sans-serif'
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

export default Pp;