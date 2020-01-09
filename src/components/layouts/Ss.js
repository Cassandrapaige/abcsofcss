import React from 'react'
import Layout from '../boilerplates/Layout';

const Ss = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Ss'

            primary = '#FE6B6B'
            secondary = '#4ECDC4'
            complimentary = '#556370'
            contrast = '#C54D57'

            family = 'sweater-school, sans-serif'
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

export default Ss;