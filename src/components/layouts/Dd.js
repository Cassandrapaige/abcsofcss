import React from 'react'
import Layout from '../boilerplates/Layout';

const Dd = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Dd'

            primary = '#30B4B6'
            secondary = '#833F74'
            complimentary = '#242424'
            contrast = '#BB89AD'

            family = 'delittle-chromatic, sans-serif'
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

export default Dd;