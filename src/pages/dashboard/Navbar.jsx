/*

*/


import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/navbar.css"
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    console.log(location.pathname);
    const isActive = (path) => {
        return location.pathname.includes(path)
    }
    return (
        <div className="navbar">
            <div className="navbar-common navbard-title">
                <span style={{color: "#ff742a"}}>Search</span>ify
            </div>
            <div className="navbar-common">
                <Link to='/home' className={`navbar-menu ${ isActive ('home') ? 'navbar-menu-active' : ''}`} style={{marginRight: "3rem"}}> Search </Link>
                <Link to='/history' className={`navbar-menu ${ isActive ('history') ? 'navbar-menu-active' : ''}`}> History </Link>
            </div>
        </div>
    )
}

export default Navbar