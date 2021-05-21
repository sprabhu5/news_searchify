// A single card component
import React from 'react'

const Cards = ({ children, classes }) => {
    return <div className={`cards ${classes}`}>
        {children}
    </div>
}

export default Cards