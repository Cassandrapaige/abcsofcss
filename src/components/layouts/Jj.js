import React from 'react'
import Layout from '../boilerplates/Layout';

const Jj = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Jj'

            primary = '#04ADBF'
            secondary = '#F23D5E'
            complimentary = '#025E73'
            contrast = '#F26389'

            family = 'joost, sans-serif'
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

export default Jj;