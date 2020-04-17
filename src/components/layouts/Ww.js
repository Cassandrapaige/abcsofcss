import React from 'react'
import Layout from '../layout/layout.component'
;

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

            selector = 'body {'
            method = 'background: repeating-linear-gradient(); }'
            link = 'https://codepen.io/cassandraPaige/pen/VwYdRab?editors=1100'
            exp = 'Just as it sounds, the repeating-linear-gradient() function is used to repeat linear gradients. Specify an angle, multiple colors, and color stops to create something truly unique. In our example, we were able to create a unique deisgn with the help of the mix-blend-mode property. Do further research and find a way to include it in your website.'
            />
        </div>
        </>
    )
}

export default Ww;