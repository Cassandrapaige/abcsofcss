import React from 'react'
import Layout from '../boilerplates/Layout';

const Hh = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Hh'

            primary = '#0388A6'
            secondary = '#151226'
            complimentary = '#731F4D'
            contrast = '#BF307F'

            family = 'halogen, sans-serif'
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

export default Hh;