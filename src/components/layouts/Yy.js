import React from 'react'
import Layout from '../layout/layout.component'
;

const Yy = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Yy'

            primary = '#6F4F73'
            secondary = '#F294AD'
            complimentary = '#BDF2E3'
            contrast = '#3A1240'

            family = 'ysans-std, sans-serif'
            fontstyle= 'normal'
            weight= '700'

            selector = '.container {'
            method = 'transform: scale(1.2); }'
            link = 'https://codepen.io/cassandraPaige/pen/MWYPOGZ'
            exp = 'Use scale() to change the size of an element along the X and Y axis, aka change the width and/or height of an element to create a smooth transition. Note how we used "transform:origin" in our example, to keep our element in its original position. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Yy;