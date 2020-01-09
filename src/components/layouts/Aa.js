import React from 'react'
import Layout from '../boilerplates/Layout';

const Aa = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Aa'

            primary = '#BF4974'
            secondary = '#132B40'
            complimentary = '#D9A566'
            contrast = '#8F94A6'

            family = 'alfarn, sans-serif'
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

export default Aa;