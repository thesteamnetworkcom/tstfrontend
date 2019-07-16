import React from 'react'
import './Layout.scss'
import Header from './Header'
import Footer from './Footer'

export default (props) => {
    return(
        <>
            <div className='layout'>
                <Header />
                <div className='body'>
                    {props.children}
                </div>
                <Footer />
            </div>
        </>
    )
}
