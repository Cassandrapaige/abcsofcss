import React from 'react'
import Layout from '../boilerplates/Layout';

const Tt = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Tt'

            primary = '#F2BE22'
            secondary = '#752F5C'
            complimentary = '#271C40'
            contrast = '#D9048E'

            family = 'tachyon, sans-serif'
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

export default Tt;