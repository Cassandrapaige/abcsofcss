import React from 'react'
import Layout from '../layout/layout.component'
;

const Pp = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Pp'

            primary = '#C3D9A3'
            secondary = '#D94179'
            complimentary = '#011C40'
            contrast = '#D9779B'

            family = 'peachy-keen-jf, sans-serif'
            fontstyle= 'normal'
            weight= '400'

            selector = 'input:focus {'
            method = 'outline: 2px solid #4D8A77; }'
            link = 'https://codepen.io/cassandraPaige/pen/QWwrZxZ'
            exp = 'The :focus pseudo-class is used on form elements to apply styles when a user clicks on an input field. You can use focus on almost any element by setting a tabindex attribute. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Pp;