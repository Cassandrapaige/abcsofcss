import React from 'react'
import Layout from '../boilerplates/Layout';

const Yy = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Yy'

            primary = '#A8E4F0'
            secondary = '#B0749C'
            complimentary = '#3A615B'
            contrast = '#B08B64'

            family = 'ysans-std, sans-serif'
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

export default Yy;