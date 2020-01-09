import React from 'react'
import Layout from '../boilerplates/Layout';

const Ww = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Ww'

            primary = '#F24B88'
            secondary = '#63AEBF'
            complimentary = '#F2C230'
            contrast = '#F29544'

            family = 'wigwag-bold, sans-serif'
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

export default Ww;