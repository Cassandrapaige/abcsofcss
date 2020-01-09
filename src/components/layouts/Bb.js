import React from 'react'
import Layout from '../boilerplates/Layout';

const Bb = () => {
    return (
        <>
        <div>
            <Layout
            letter = 'Bb'

            primary = '#F29F05'
            secondary = '#F23D5E'
            complimentary = '#ADBF69'
            contrast = '#F22233'

            family = 'balboa, sans-serif'
            fontstyle= 'normal'
            weight= '300'

            selector = 'CONIC-GRADIENT'
            method = 'A conic gradient is similar to a radial gradient. Both are circular and use the center of the element as the source point for color stops. However, where the color stops of a radial gradient emerge from the center of the circle, a conic gradient places them around the circle.'
            link = 'https://codepen.io/cassandraPaige/pen/OJPjzWr?editors=1100'
            />
        </div>
        </>
    )
}

export default Bb;