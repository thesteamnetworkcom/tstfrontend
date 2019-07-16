import React from 'react'
import './Footer.scss'

export default (props) => {
    return(
        <div className='footer'>
            footer
            {props.children}
        </div>
    )
}
