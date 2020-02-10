import React from 'react'
import Layout from '../Layout';

const Ll = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Ll'

            primary = '#F2AF5C'
            secondary = '#A6335D'
            complimentary = '#025E73'
            contrast = '#F2836B'

            family = 'latex, sans-serif'
            fontstyle= 'normal'
            weight= '400'

            selector = 'img {'
            method = 'filter: hue-rotate(90deg); }'
            link = 'https://codepen.io/cassandraPaige/pen/Poweyve'
            exp = 'Similar to the effects found on Photoshop, CSS filters allow you to manipulate images by adding filters such as blur, hue or grayscale. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Ll;