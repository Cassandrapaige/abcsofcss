import React from 'react'
import Layout from '../boilerplates/Layout';

const Ff = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Ff'

            primary = '#F24141'
            secondary = '#04B2D9'
            complimentary = '#F29F05'
            contrast = '#049DD9'

            family = 'fairway, sans-serif'
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

export default Ff;