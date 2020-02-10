import React from 'react'
import Layout from '../Layout';

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

            selector = 'svg {'
            method = 'fill: #F24141; }'
            link = 'https://codepen.io/cassandraPaige/pen/ZEYRmjb'
            exp = 'The fill property allows you to change the color of an SVG element. Hover over the example images and see how they change color. This would not be possible by just adding a background-color. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Ff;