import React from 'react'
import Layout from '../boilerplates/Layout';

const Kk = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Kk'

            primary = '#CC5E88'
            secondary = '#188199'
            complimentary = '#90FFD6'
            contrast = '#FFD0CF'

            family = 'kari-display-pro, sans-serif'
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

export default Kk;