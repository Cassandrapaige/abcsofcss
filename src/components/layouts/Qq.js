import React from 'react'
import Layout from '../layout/layout.component'
;

const Qq = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Qq'

            primary = '#FF573A'
            secondary = '#6394FF'
            complimentary = '#FFBD2B'
            contrast = '#1F3340'

            family = 'quiche-sans, sans-serif'
            fontstyle= 'normal'
            weight= '800'

            selector = 'h1 {'
            method = '-webkit-text-stroke: 4px #FF573A; }'
            link = 'https://codepen.io/cassandraPaige/pen/povxWre'
            exp = 'The text-stroke property allows you to change the width and color of the texts stroke effect. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Qq;