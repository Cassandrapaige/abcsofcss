import React from 'react'

import './homepage.styles.scss'
import Header from '../header/header.component'

const Homepage = () => {
    return (
        <div className="container">
        <div className="rules">
            <div className="rules-container">
            <div className="cart-title"><i class="fas fa-cog"></i>Colors<br/></div>
            <code className="selector">{ `:root { `}<br/></code>
            <code className = 'key'> --primary-color<code className="selector">{ `: `}</code></code>
                <code className = 'value'>#D96AA7<code className="selector">{ `;`}</code></code><br/>

                <code className = 'key'> --secondary-color<code className="selector">{ `: `}</code></code>
                <code className = 'value'>#422C73<code className="selector">{ `;`}</code></code><br/>

                <code className = 'key'> --complimentary-color<code className="selector">{ `: `}</code></code>
                <code className = 'value'>#88BFB5<code className="selector">{ `;`}</code></code><br/>

                <code className = 'key'> --contrast-color<code className="selector">{ `: `}</code></code>
                <code className = 'value'>#F2E527<code className="selector">{ `;`}</code></code><br/>
                <code className="selector">{ ` } `}</code>
            </div>

            <div className="rules-container">
            <div className="cart-title"><i class="fas fa-cog"></i>Fonts<br/></div>

            <code className="selector">{ `h1, h2 { `}<br/></code>
                <code className = 'key'> font-family<code className="selector">{ `: `}</code></code>
                <code className = 'value'>'alfaro, sans-serif'<code className="selector">{ `;`}</code></code><br/>

                <code className = 'key'> font-style<code className="selector">{ `: `}</code></code>
                <code className = 'value'>normal<code className="selector">{ `;`}</code></code><br/>

                <code className = 'key'> font-weight<code className="selector">{ `: `}</code></code>
                <code className = 'value'>700<code className="selector">{ `;`}</code></code><br/>
            <code className="selector">{ ` } `}</code>
            </div>


            <div className="rules-container">
            <div className="cart-title"><i class="fas fa-cog"></i>CSS<br/></div>

            <code className="selector">{ `h1:nth-of-type(3n + 1) { `}<br/></code>
                <code className = 'key'> color<code className="selector">{ `: `}</code></code>
                <code className = 'value'>var(--primary-color)<code className="selector">{ `;`}</code></code><br/>
            <code className="selector">{ ` } `}</code>
            </div>
        </div>
        </div>
    )
}

export default Homepage
