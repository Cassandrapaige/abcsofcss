import React from 'react'
import Layout from '../boilerplates/Layout';

const Mm = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Mm'

            primary = '#038C8C'
            secondary = '#022859'
            complimentary = '#F7689D'
            contrast = '#B571AC'

            family = 'macha, sans-serif'
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

export default Mm;