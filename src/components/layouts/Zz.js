import React from 'react'
import Layout from '../boilerplates/Layout';

const Zz = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Zz'

            primary = '#BE4269'
            secondary = '#351835'
            complimentary = '#D0B651'
            contrast = '#6D184A'

            family = 'zebrawood-std-fill, sans-serif'
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

export default Zz;