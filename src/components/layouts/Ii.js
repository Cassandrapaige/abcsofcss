import React from 'react'
import Layout from '../boilerplates/Layout';

const Ii = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Ii'

            primary = '#F64398'
            secondary = '#8172F8'
            complimentary = '#68BBDD'
            contrast = '#4B9116'

            family = 'imperial-urw, sans-serif'
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

export default Ii;