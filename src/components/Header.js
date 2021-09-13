import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
        
            <h1>Reacter Router Tutorial</h1>
            <ul className="navbar">
            
            <li>
            <Link to="/">Home</Link>
            </li>
            
            <li>
            <Link to="/About">About</Link>
            </li>
            
            
            <li>
            <Link to="/Profile">Profile</Link>
            </li>
            
            </ul>
        </div>
    )
}
